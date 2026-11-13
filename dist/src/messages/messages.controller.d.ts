import { MessagesService } from './messages.service';
import { AuthUser } from '../auth/current-user.decorator';
import { CreateMessageDto } from './dto/create-message.dto';
export declare class MessagesController {
    private messages;
    constructor(messages: MessagesService);
    list(user: AuthUser): Promise<{
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
    create(user: AuthUser, dto: CreateMessageDto): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        sender: string;
        title: string;
        body: string;
        iconType: string;
        readAt: Date | null;
    }>;
    markAllRead(user: AuthUser): Promise<{
        updated: number;
    }>;
    markRead(user: AuthUser, id: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        sender: string;
        title: string;
        body: string;
        iconType: string;
        readAt: Date | null;
    }>;
}
