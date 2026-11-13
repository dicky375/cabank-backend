import { PrismaService } from '../prisma/prisma.service';
import { TransactionType, TransactionStatus } from '../../generated/prisma/client';
import { QueryTransactionsDto } from './dto/query-transactions.dto';
export declare class TransactionsService {
    private prisma;
    constructor(prisma: PrismaService);
    private getUserAccountIds;
    list(userId: string, query: QueryTransactionsDto): Promise<{
        total: number;
        limit: number;
        offset: number;
        transactions: {
            id: string;
            reference: string;
            amount: import("@prisma/client-runtime-utils").Decimal;
            fee: import("@prisma/client-runtime-utils").Decimal;
            type: TransactionType;
            status: TransactionStatus;
            description: string | null;
            createdAt: Date;
            direction: string;
        }[];
    }>;
    analytics(userId: string, months?: number): Promise<{
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
