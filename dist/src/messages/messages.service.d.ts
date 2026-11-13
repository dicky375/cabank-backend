import { PrismaService } from '../prisma/prisma.service';
import { CreateMessageDto } from './dto/create-message.dto';
export declare class MessagesService {
    private prisma;
    constructor(prisma: PrismaService);
    list(userId: string): Promise<{
        unreadCount: number;
        messages: {
            id: string;
            createdAt: Date;
            userId: string;
            sender: string;
            title: string;
            body: string;
            iconType: string;
            readAt: Date | null;
        }[];
    }>;
    create(userId: string, dto: CreateMessageDto): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        sender: string;
        title: string;
        body: string;
        iconType: string;
        readAt: Date | null;
    }>;
    markRead(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        sender: string;
        title: string;
        body: string;
        iconType: string;
        readAt: Date | null;
    }>;
    markAllRead(userId: string): Promise<{
        updated: number;
    }>;
}
