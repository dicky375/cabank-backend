import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, TransactionType, TransactionStatus } from '../../generated/prisma/client';

export interface TransferInput {
  senderAccountId: string;
  receiverAccountId: string;
  amount: string | number;
  fee?: string | number;
  type: TransactionType;
  description?: string;
  creditReceiverWithFee?: boolean;
}

@Injectable()
export class LedgerService {
  constructor(private prisma: PrismaService) {}

  async transfer(input: TransferInput) {
    const amount = new Prisma.Decimal(input.amount);
    const fee = new Prisma.Decimal(input.fee ?? 0);
    const totalDebit = amount.plus(fee);

    if (amount.lte(0)) throw new BadRequestException('Amount must be greater than 0');

    const reference = this.generateReference();

    return this.executeWithRetry(() =>
      this.prisma.$transaction(
        async (tx) => {
          const lockedSender = await tx.$queryRaw<
            Array<{ id: string; balance: string; status: string }>
          >`
            SELECT id, balance::text AS balance, status
            FROM "Account" WHERE id = ${input.senderAccountId}
            FOR UPDATE
          `;
          if (lockedSender.length === 0) throw new NotFoundException('Sender account not found');
          if (lockedSender[0].status !== 'ACTIVE')
            throw new BadRequestException('Sender account is not active');

          const lockedReceiver = await tx.$queryRaw<Array<{ id: string; status: string }>>`
            SELECT id, status FROM "Account" WHERE id = ${input.receiverAccountId}
            FOR UPDATE
          `;
          if (lockedReceiver.length === 0) throw new NotFoundException('Receiver account not found');
          if (lockedReceiver[0].status !== 'ACTIVE')
            throw new BadRequestException('Receiver account is not active');

          const senderBalance = new Prisma.Decimal(lockedSender[0].balance);
          if (senderBalance.lt(totalDebit)) {
            throw new BadRequestException(
              `Insufficient funds. Balance: ${senderBalance.toFixed(2)}, required: ${totalDebit.toFixed(2)}`,
            );
          }

          await tx.account.update({
            where: { id: input.senderAccountId },
            data: { balance: { decrement: totalDebit } },
          });
          const receiverCredit = input.creditReceiverWithFee
            ? amount.plus(fee)
            : amount;
          await tx.account.update({
            where: { id: input.receiverAccountId },
            data: { balance: { increment: receiverCredit } },
          });

          const transaction = await tx.transaction.create({
            data: {
              reference,
              senderId: input.senderAccountId,
              receiverId: input.receiverAccountId,
              amount,
              fee,
              type: input.type,
              status: TransactionStatus.SUCCESS,
              description: input.description,
            },
          });

          return {
            reference: transaction.reference,
            amount: amount.toFixed(2),
            fee: fee.toFixed(2),
            status: transaction.status,
            createdAt: transaction.createdAt,
          };
        },
        {
          timeout: 10000,
          isolationLevel: Prisma.TransactionIsolationLevel.RepeatableRead,
        },
      ),
    );
  }

  /**
   * Retry a transaction on serialization conflict (P2034) or deadlock.
   */
   private async executeWithRetry<T>(fn: () => Promise<T>, maxAttempts = 15): Promise<T> {
    let lastError: any;
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        return await fn();
      } catch (err: any) {
        const cause = err?.meta?.driverAdapterError?.cause;
        const isWriteConflict =
          cause?.kind === 'TransactionWriteConflict' ||
          cause?.originalCode === '40001' ||
          cause?.originalCode === '40P01' ||
          err?.code === 'P2034' ||
          err?.message?.includes('could not serialize') ||
          err?.message?.includes('deadlock');

        if (isWriteConflict && attempt < maxAttempts) {
          lastError = err;
          // Exponential backoff with jitter (2ms → 32ms → ... capped at 200ms)
          const delay = Math.min(2 ** attempt + Math.random() * 20, 200);
          await new Promise((r) => setTimeout(r, delay));
          continue;
        }
        throw err;
      }
    }
    throw lastError;
  }
  private generateReference(): string {
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const rand = Math.random().toString(36).substring(2, 10).toUpperCase();
    return `TXN-${date}-${rand}`;
  }
}
