import { TransfersService } from './transfers.service';
import { TransferDto } from './dto/transfer.dto';
export declare class TransfersController {
    private transfers;
    constructor(transfers: TransfersService);
    internal(dto: TransferDto): Promise<{
        reference: string;
        amount: string;
        fee: string;
        status: import("../../generated/prisma/enums").TransactionStatus;
        createdAt: Date;
    }>;
}
