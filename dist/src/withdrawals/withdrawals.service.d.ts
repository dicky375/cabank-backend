import { PrismaService } from '../prisma/prisma.service';
import { LedgerService } from '../ledger/ledger.service';
import { WithdrawDto } from './dto/withdraw.dto';
export declare class WithdrawalsService {
    private prisma;
    private ledger;
    constructor(prisma: PrismaService, ledger: LedgerService);
    withdraw(userId: string, dto: WithdrawDto): Promise<{
        withdrawal: {
            cardLast4: string;
            amount: string;
            fee: string;
            total: string;
        };
        reference: string;
        amount: string;
        fee: string;
        status: import("../../generated/prisma/enums").TransactionStatus;
        createdAt: Date;
    }>;
    history(userId: string): Promise<{
        total: number;
        withdrawals: {
            id: string;
            reference: string;
            amount: import("@prisma/client-runtime-utils").Decimal;
            fee: import("@prisma/client-runtime-utils").Decimal;
            status: import("../../generated/prisma/enums").TransactionStatus;
            description: string | null;
            createdAt: Date;
        }[];
    }>;
}
