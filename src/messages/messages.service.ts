import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessagesService {
  constructor(private prisma: PrismaService) {}

  async list(userId: string) {
    const messages = await this.prisma.message.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });

    const unreadCount = messages.filter((m) => !m.readAt).length;
    return { unreadCount, messages };
  }

  async create(userId: string, dto: CreateMessageDto) {
    return this.prisma.message.create({
      data: {
        userId,
        sender: dto.sender,
        title: dto.title,
        body: dto.body,
        iconType: dto.iconType ?? 'default',
      },
    });
  }

  async markRead(userId: string, id: string) {
    const msg = await this.prisma.message.findFirst({
      where: { id, userId },
    });
    if (!msg) throw new NotFoundException('Message not found');

    return this.prisma.message.update({
      where: { id },
      data: { readAt: new Date() },
    });
  }

  async markAllRead(userId: string) {
    const result = await this.prisma.message.updateMany({
      where: { userId, readAt: null },
      data: { readAt: new Date() },
    });
    return { updated: result.count };
  }
}
