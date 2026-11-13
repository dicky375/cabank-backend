import { TransactionType, TransactionStatus } from '../../../generated/prisma/client';
export declare class QueryTransactionsDto {
    type?: TransactionType;
    status?: TransactionStatus;
    from?: string;
    to?: string;
    limit?: number;
    offset?: number;
}
