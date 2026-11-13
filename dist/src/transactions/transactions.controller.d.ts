import { TransactionsService } from './transactions.service';
import { AuthUser } from '../auth/current-user.decorator';
import { QueryTransactionsDto } from './dto/query-transactions.dto';
export declare class TransactionsController {
    private transactions;
    constructor(transactions: TransactionsService);
    list(user: AuthUser, query: QueryTransactionsDto): Promise<{
        total: number;
        limit: number;
        offset: number;
        transactions: {
            id: string;
            reference: string;
            amount: import("@prisma/client-runtime-utils").Decimal;
            fee: import("@prisma/client-runtime-utils").Decimal;
            type: import("../../generated/prisma/enums").TransactionType;
            status: import("../../generated/prisma/enums").TransactionStatus;
            description: string | null;
            createdAt: Date;
            direction: string;
        }[];
    }>;
    analytics(user: AuthUser, months?: string): Promise<{
        months: {
            month: string;
            label: string;
            income: string;
            expense: string;
            count: number;
        }[];
        incomeTotal: string;
        expenseTotal: string;
    }>;
}
