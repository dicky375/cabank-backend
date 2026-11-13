import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBeneficiaryDto, BeneficiaryType } from './dto/create-beneficiary.dto';

@Injectable()
export class BeneficiariesService {
  constructor(private prisma: PrismaService) {}

  async listGrouped(userId: string) {
    const all = await this.prisma.beneficiary.findMany({
      where: { userId },
      orderBy: { name: 'asc' },
    });

    return {
      byCard: all.filter((b) => b.type === BeneficiaryType.CARD),
      sameBank: all.filter((b) => b.type === BeneficiaryType.SAME_BANK),
      otherBank: all.filter((b) => b.type === BeneficiaryType.OTHER_BANK),
      total: all.length,
    };
  }

  async create(userId: string, dto: CreateBeneficiaryDto) {
    // Prevent duplicates (same account number + same user)
    const existing = await this.prisma.beneficiary.findFirst({
      where: { userId, accountNumber: dto.accountNumber },
    });
    if (existing) {
      throw new BadRequestException('Beneficiary with this account number already exists');
    }

    return this.prisma.beneficiary.create({
      data: {
        userId,
        name: dto.name,
        accountNumber: dto.accountNumber,
        bankName: dto.bankName,
        type: dto.type,
      },
    });
  }

  async remove(userId: string, id: string) {
    const b = await this.prisma.beneficiary.findFirst({
      where: { id, userId },
    });
    if (!b) throw new NotFoundException('Beneficiary not found');

    await this.prisma.beneficiary.delete({ where: { id } });
    return { success: true, deletedId: id };
  }
}
