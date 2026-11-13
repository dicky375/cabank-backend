import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { SignInDto, SignUpDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { AccountType } from '../../generated/prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  private generateAccountNumber(): string {
    return Math.floor(1000000000 + Math.random() * 9000000000).toString();
  }

  async signUp(dto: SignUpDto) {
    const userExists = await this.prisma.user.findFirst({
      where: { OR: [{ email: dto.email }, { phone: dto.phone }] },
    });
    if (userExists) throw new ConflictException('Email or phone already in use');

    const passwordHash = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.$transaction(async (tx) => {
      const newUser = await tx.user.create({
        data: {
          firstName: dto.firstName,
          lastName: dto.lastName,
          email: dto.email,
          phone: dto.phone,
          passwordHash,
        },
      });
      await tx.account.create({
        data: {
          userId: newUser.id,
          accountNumber: this.generateAccountNumber(),
          type: AccountType.CURRENT,
          balance: 0,
        },
      });
      return newUser;
    });

    return this.signToken(user.id, user.email);
  }

  async signIn(dto: SignInDto) {
    const user = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (!user) throw new UnauthorizedException('Invalid credentials');
    const ok = await bcrypt.compare(dto.password, user.passwordHash);
    if (!ok) throw new UnauthorizedException('Invalid credentials');
    return this.signToken(user.id, user.email);
  }

  private async signToken(userId: string, email: string) {
    const payload = { sub: userId, email };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user: { id: userId, email },
    };
  }
}
