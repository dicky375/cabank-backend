import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LedgerService } from '../ledger/ledger.service';
import { TransactionType, Prisma } from '../../generated/prisma/client';
import { WithdrawDto } from './dto/withdraw.dto';

const WITHDRAWAL_FEE_RATE = 0.01; // 1%

@Injectable()
export class WithdrawalsService {
  constructor(
    private prisma: PrismaService,
    private ledger: LedgerService,
  ) {}

  async withdraw(userId: string, dto: WithdrawDto) {
    const account = await this.prisma.account.findFirst({
      where: { id: dto.accountId, userId },
    });
    if (!account) throw new BadRequestException('Account not found or not yours');

    const card = await this.prisma.card.findFirst({
      where: { id: dto.cardId, userId, accountId: dto.accountId },
    });
    if (!card) throw new BadRequestException('Card not found or not linked to this account');

    const fee = new Prisma.Decimal(dto.amount).mul(WITHDRAWAL_FEE_RATE);

    const result = await this.ledger.transfer({
      senderAccountId: dto.accountId,
      receiverAccountId: 'treasury-acc',
      amount: String(dto.amount),
      fee: fee.toFixed(2),
      type: TransactionType.WITHDRAWAL,
      description: dto.description ?? `Withdrawal to card ${card.cardNumber.slice(-4)}`,
      creditReceiverWithFee: true,
    });

    return {
      ...result,
      withdrawal: {
        cardLast4: card.cardNumber.slice(-4),
        amount: new Prisma.Decimal(dto.amount).toFixed(2),
        fee: fee.toFixed(2),
        total: new Prisma.Decimal(dto.amount).plus(fee).toFixed(2),
      },
    };
  }

  async history(userId: string) {
    const accountIds = (
      await this.prisma.account.findMany({
        where: { userId },
        select: { id: true },
      })
    ).map((a) => a.id);

    const txs = await this.prisma.transaction.findMany({
      where: { senderId: { in: accountIds }, type: TransactionType.WITHDRAWAL },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });

    return {
      total: txs.length,
      withdrawals: txs.map((t) => ({
        id: t.id,
        reference: t.reference,
        amount: t.amount,
        fee: t.fee,
        status: t.status,
        description: t.description,
        createdAt: t.createdAt,
      })),
    };
  }
}
