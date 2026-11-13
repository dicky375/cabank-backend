import { WithdrawalsService } from './withdrawals.service';
import { AuthUser } from '../auth/current-user.decorator';
import { WithdrawDto } from './dto/withdraw.dto';
export declare class WithdrawalsController {
    private withdrawals;
    constructor(withdrawals: WithdrawalsService);
    withdraw(user: AuthUser, dto: WithdrawDto): Promise<{
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
    history(user: AuthUser): Promise<{
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
