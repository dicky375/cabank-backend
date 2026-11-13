import { PrismaService } from '../prisma/prisma.service';
import { CreateMessageDto } from './dto/create-message.dto';
export declare class MessagesService {
    private prisma;
    constructor(prisma: PrismaService);
    list(userId: string): Promise<{
        unreadCount: any;
        messages: any;
    }>;
    create(userId: string, dto: CreateMessageDto): Promise<any>;
    markRead(userId: string, id: string): Promise<any>;
    markAllRead(userId: string): Promise<{
        updated: any;
    }>;
}
