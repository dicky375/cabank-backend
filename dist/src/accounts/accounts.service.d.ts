import { PrismaService } from '../prisma/prisma.service';
export declare class AccountsService {
    private prisma;
    constructor(prisma: PrismaService);
    listForUser(userId: string): Promise<{
        id: string;
        createdAt: Date;
        accountNumber: string;
        type: import("../../generated/prisma/enums").AccountType;
        balance: import("@prisma/client-runtime-utils").Decimal;
        branch: string;
        status: string;
    }[]>;
    findOne(userId: string, accountId: string): Promise<{
        id: string;
        createdAt: Date;
        cards: {
            id: string;
            status: string;
            cardNumber: string;
            expiryDate: Date;
            brand: string;
        }[];
        accountNumber: string;
        type: import("../../generated/prisma/enums").AccountType;
        balance: import("@prisma/client-runtime-utils").Decimal;
        branch: string;
        status: string;
    }>;
    summaryForUser(userId: string): Promise<{
        accountCount: number;
        totalBalance: string;
        accounts: {
            id: string;
            type: import("../../generated/prisma/enums").AccountType;
            balance: import("@prisma/client-runtime-utils").Decimal;
            status: string;
        }[];
    }>;
}
