import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateCardDto } from './dto/create-card.dto';

@Injectable()
export class CardsService {
  constructor(private prisma: PrismaService) {}

  /** Mask a card number: 4756 ********** 9018 */
  private maskCardNumber(cardNumber: string) {
    if (cardNumber.length < 8) return cardNumber;
    const first4 = cardNumber.slice(0, 4);
    const last4 = cardNumber.slice(-4);
    const masked = '*'.repeat(cardNumber.length - 8);
    return `${first4} ${masked} ${last4}`;
  }

  private formatCard(card: any) {
    return {
      id: card.id,
      cardNumber: this.maskCardNumber(card.cardNumber),
      last4: card.cardNumber.slice(-4),
      brand: card.brand,
      status: card.status,
      expiryDate: card.expiryDate,
      createdAt: card.createdAt,
      account: card.account
        ? {
            id: card.account.id,
            accountNumber: card.account.accountNumber,
            balance: card.account.balance,
          }
        : undefined,
    };
  }

  async listForUser(userId: string) {
    const cards = await this.prisma.card.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      include: {
        account: {
          select: { id: true, accountNumber: true, balance: true },
        },
      },
    });
    return cards.map((c) => this.formatCard(c));
  }

  async findOne(userId: string, cardId: string) {
    const card = await this.prisma.card.findFirst({
      where: { id: cardId, userId },
      include: {
        account: {
          select: { id: true, accountNumber: true, balance: true },
        },
      },
    });
    if (!card) throw new NotFoundException('Card not found');
    return this.formatCard(card);
  }

  async create(userId: string, dto: CreateCardDto) {
    // Verify the account belongs to the user
    const account = await this.prisma.account.findFirst({
      where: { id: dto.accountId, userId },
    });
    if (!account) throw new BadRequestException('Account not found or not yours');

    // Check if card number already exists
    const existing = await this.prisma.card.findUnique({
      where: { cardNumber: dto.cardNumber },
    });
    if (existing) throw new BadRequestException('Card number already registered');

    const cvvHash = await bcrypt.hash(dto.cvv, 10);

    const card = await this.prisma.card.create({
      data: {
        userId,
        accountId: dto.accountId,
        cardNumber: dto.cardNumber,
        expiryDate: new Date(dto.expiryDate),
        cvvHash,
        brand: this.detectBrand(dto.cardNumber),
        status: 'ACTIVE',
      },
      include: {
        account: {
          select: { id: true, accountNumber: true, balance: true },
        },
      },
    });

    return this.formatCard(card);
  }

  async remove(userId: string, cardId: string) {
    const card = await this.prisma.card.findFirst({
      where: { id: cardId, userId },
    });
    if (!card) throw new NotFoundException('Card not found');

    await this.prisma.card.delete({ where: { id: cardId } });
    return { success: true, deletedId: cardId };
  }

  private detectBrand(cardNumber: string): string {
    if (cardNumber.startsWith('4')) return 'VISA';
    if (/^5[1-5]/.test(cardNumber)) return 'MASTERCARD';
    if (/^3[47]/.test(cardNumber)) return 'AMEX';
    return 'VISA';
  }
}
