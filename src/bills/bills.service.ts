import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LedgerService } from '../ledger/ledger.service';
import { Prisma, TransactionType, TransactionStatus } from '../../generated/prisma/client';
import {
  BillType,
  BILL_LABELS,
  TAX_RATES,
  TREASURY_ACCOUNT_ID,
  BillPreviewResult,
} from './bill-types';
import { PayBillDto, PreviewBillDto } from './dto/pay-bill.dto';

@Injectable()
export class BillsService {
  constructor(
    private prisma: PrismaService,
    private ledger: LedgerService,
  ) {}

  listTypes() {
    return Object.values(BillType).map((t) => ({
      type: t,
      label: BILL_LABELS[t],
      taxRate: TAX_RATES[t],
    }));
  }

  preview(dto: PreviewBillDto): BillPreviewResult {
    const taxRate = TAX_RATES[dto.type];
    const subtotal = new Prisma.Decimal(dto.amount);
    const tax = subtotal.mul(taxRate);
    const total = subtotal.plus(tax);

    return {
      type: dto.type,
      label: BILL_LABELS[dto.type],
      meta: {
        name: 'Jackson Maine',
        address: '403 East 4th Street, Santa Ana',
        phone: '+8424599721',
        code: dto.customerCode ?? '#2343543',
        from: '01/10/2026',
        to: '01/11/2026',
      },
      subtotal: subtotal.toFixed(2),
      tax: tax.toFixed(2),
      total: total.toFixed(2),
      taxRate,
    };
  }

  async pay(userId: string, dto: PayBillDto) {
    // Verify the sender account belongs to this user
    const sender = await this.prisma.account.findFirst({
      where: { id: dto.senderAccountId, userId },
    });
    if (!sender) throw new BadRequestException('Sender account not found or not yours');

    const taxRate = TAX_RATES[dto.type];
    const subtotal = new Prisma.Decimal(dto.amount);
    const tax = subtotal.mul(taxRate);

    // Debit from sender (amount + tax), credit to treasury
   
        const result = await this.ledger.transfer({
      senderAccountId: dto.senderAccountId,
      receiverAccountId: TREASURY_ACCOUNT_ID,
      amount: subtotal.toFixed(2),  // ✅ string
      fee: tax.toFixed(2),          // ✅ string
      type: TransactionType.BILL_PAYMENT,
      description: `${BILL_LABELS[dto.type]}${dto.customerCode ? ` #${dto.customerCode}` : ''}`,
      creditReceiverWithFee: true,
    });
    return {
      ...result,
      bill: {
        type: dto.type,
        label: BILL_LABELS[dto.type],
        subtotal: subtotal.toFixed(2),
        tax: tax.toFixed(2),
        total: subtotal.plus(tax).toFixed(2),
      },
    };
  }

  async history(
    userId: string,
    opts: { type?: BillType; status?: TransactionStatus; limit?: number; offset?: number },
  ) {
    // Find all user's accounts
    const accounts = await this.prisma.account.findMany({
      where: { userId },
      select: { id: true },
    });
    const accountIds = accounts.map((a) => a.id);

    const where: Prisma.TransactionWhereInput = {
      senderId: { in: accountIds },
      type: TransactionType.BILL_PAYMENT,
    };
    if (opts.status) where.status = opts.status;

    const [transactions, total] = await Promise.all([
      this.prisma.transaction.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        take: opts.limit ?? 20,
        skip: opts.offset ?? 0,
        select: {
          id: true,
          reference: true,
          amount: true,
          fee: true,
          status: true,
          description: true,
          createdAt: true,
        },
      }),
      this.prisma.transaction.count({ where }),
    ]);

    return {
      total,
      limit: opts.limit ?? 20,
      offset: opts.offset ?? 0,
      transactions: transactions.map((t) => ({
        ...t,
        total: new Prisma.Decimal(t.amount).plus(t.fee).toFixed(2),
        // Extract bill type from description prefix (e.g. "Electric bill...")
        type: this.extractBillType(t.description),
      })),
    };
  }

  private extractBillType(description: string | null): BillType | null {
    if (!description) return null;
    for (const t of Object.values(BillType)) {
      if (description.startsWith(BILL_LABELS[t])) return t;
    }
    return null;
  }
}
