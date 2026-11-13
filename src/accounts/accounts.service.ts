import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../generated/prisma/client';

@Injectable()
export class AccountsService {
  constructor(private prisma: PrismaService) {}

  async listForUser(userId: string) {
    return this.prisma.account.findMany({
      where: { userId },
      orderBy: { createdAt: 'asc' },
      select: {
        id: true,
        accountNumber: true,
        type: true,
        balance: true,
        branch: true,
        status: true,
        createdAt: true,
      },
    });
  }

  async findOne(userId: string, accountId: string) {
    const account = await this.prisma.account.findFirst({
      where: { id: accountId, userId },
      select: {
        id: true,
        accountNumber: true,
        type: true,
        balance: true,
        branch: true,
        status: true,
        createdAt: true,
        cards: {
          select: {
            id: true,
            cardNumber: true,
            brand: true,
            expiryDate: true,
            status: true,
          },
        },
      },
    });

    if (!account) throw new NotFoundException('Account not found');
    return account;
  }

  async summaryForUser(userId: string) {
    const accounts = await this.prisma.account.findMany({
      where: { userId },
      select: { id: true, balance: true, type: true, status: true },
    });

    const total = accounts.reduce(
      (sum, acc) => sum.plus(acc.balance),
      new Prisma.Decimal(0),
    );

    return {
      accountCount: accounts.length,
      totalBalance: total.toFixed(2),
      accounts,
    };
  }
}
