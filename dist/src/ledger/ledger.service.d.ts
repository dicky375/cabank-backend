import { PrismaService } from '../prisma/prisma.service';
import { TransactionType, TransactionStatus } from '../../generated/prisma/client';
export interface TransferInput {
    senderAccountId: string;
    receiverAccountId: string;
    amount: string | number;
    fee?: string | number;
    type: TransactionType;
    description?: string;
    creditReceiverWithFee?: boolean;
}
export declare class LedgerService {
    private prisma;
    constructor(prisma: PrismaService);
    transfer(input: TransferInput): Promise<{
        reference: string;
        amount: string;
        fee: string;
        status: TransactionStatus;
        createdAt: Date;
    }>;
    private executeWithRetry;
    private generateReference;
}
