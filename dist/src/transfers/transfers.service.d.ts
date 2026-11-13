import { LedgerService } from '../ledger/ledger.service';
import { TransferDto } from './dto/transfer.dto';
export declare class TransfersService {
    private ledger;
    constructor(ledger: LedgerService);
    internalTransfer(dto: TransferDto): Promise<{
        reference: string;
        amount: string;
        fee: string;
        status: import("../../generated/prisma/enums").TransactionStatus;
        createdAt: Date;
    }>;
}
