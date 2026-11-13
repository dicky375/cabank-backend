import { PrismaService } from '../prisma/prisma.service';
import { CreateCardDto } from './dto/create-card.dto';
export declare class CardsService {
    private prisma;
    constructor(prisma: PrismaService);
    private maskCardNumber;
    private formatCard;
    listForUser(userId: string): Promise<{
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
    findOne(userId: string, cardId: string): Promise<{
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
    create(userId: string, dto: CreateCardDto): Promise<{
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
    remove(userId: string, cardId: string): Promise<{
        success: boolean;
        deletedId: string;
    }>;
    private detectBrand;
}
