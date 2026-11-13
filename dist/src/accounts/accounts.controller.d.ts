import { AccountsService } from './accounts.service';
import { AuthUser } from '../auth/current-user.decorator';
export declare class AccountsController {
    private accounts;
    constructor(accounts: AccountsService);
    list(user: AuthUser): Promise<{
        id: string;
        createdAt: Date;
        accountNumber: string;
        type: import("../../generated/prisma/enums").AccountType;
        balance: import("@prisma/client-runtime-utils").Decimal;
        branch: string;
        status: string;
    }[]>;
    summary(user: AuthUser): Promise<{
        accountCount: number;
        totalBalance: string;
        accounts: {
            id: string;
            type: import("../../generated/prisma/enums").AccountType;
            balance: import("@prisma/client-runtime-utils").Decimal;
            status: string;
        }[];
    }>;
    findOne(user: AuthUser, id: string): Promise<{
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
}
