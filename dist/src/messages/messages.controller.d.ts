import { MessagesService } from './messages.service';
import { AuthUser } from '../auth/current-user.decorator';
import { CreateMessageDto } from './dto/create-message.dto';
export declare class MessagesController {
    private messages;
    constructor(messages: MessagesService);
    list(user: AuthUser): Promise<{
        unreadCount: any;
        messages: any;
    }>;
    create(user: AuthUser, dto: CreateMessageDto): Promise<any>;
    markAllRead(user: AuthUser): Promise<{
        updated: any;
    }>;
    markRead(user: AuthUser, id: string): Promise<any>;
}
