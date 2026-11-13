import { CardsService } from './cards.service';
import { AuthUser } from '../auth/current-user.decorator';
import { CreateCardDto } from './dto/create-card.dto';
export declare class CardsController {
    private cards;
    constructor(cards: CardsService);
    list(user: AuthUser): Promise<{
        id: any;
        cardNumber: string;
        last4: any;
        brand: any;
        status: any;
        expiryDate: any;
        createdAt: any;
        account: {
            id: any;
            accountNumber: any;
            balance: any;
        } | undefined;
    }[]>;
    findOne(user: AuthUser, id: string): Promise<{
        id: any;
        cardNumber: string;
        last4: any;
        brand: any;
        status: any;
        expiryDate: any;
        createdAt: any;
        account: {
            id: any;
            accountNumber: any;
            balance: any;
        } | undefined;
    }>;
    create(user: AuthUser, dto: CreateCardDto): Promise<{
        id: any;
        cardNumber: string;
        last4: any;
        brand: any;
        status: any;
        expiryDate: any;
        createdAt: any;
        account: {
            id: any;
            accountNumber: any;
            balance: any;
        } | undefined;
    }>;
    remove(user: AuthUser, id: string): Promise<{
        success: boolean;
        deletedId: string;
    }>;
}
