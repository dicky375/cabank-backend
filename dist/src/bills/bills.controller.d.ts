import { BillsService } from './bills.service';
import { AuthUser } from '../auth/current-user.decorator';
import { PayBillDto, PreviewBillDto } from './dto/pay-bill.dto';
import { BillType } from './bill-types';
export declare class BillsController {
    private bills;
    constructor(bills: BillsService);
    types(): {
        type: BillType;
        label: string;
        taxRate: number;
    }[];
    preview(dto: PreviewBillDto): import("./bill-types").BillPreviewResult;
    pay(user: AuthUser, dto: PayBillDto): Promise<{
        bill: {
            type: BillType;
            label: string;
            subtotal: string;
            tax: string;
            total: string;
        };
        reference: string;
        amount: string;
        fee: string;
        status: import("../../generated/prisma/enums").TransactionStatus;
        createdAt: Date;
    }>;
    history(user: AuthUser, type?: BillType, limit?: string, offset?: string): Promise<{
        total: number;
        limit: number;
        offset: number;
        transactions: {
            total: string;
            type: BillType | null;
            id: string;
            createdAt: Date;
            status: import("../../generated/prisma/enums").TransactionStatus;
            reference: string;
            amount: import("@prisma/client-runtime-utils").Decimal;
            fee: import("@prisma/client-runtime-utils").Decimal;
            description: string | null;
        }[];
    }>;
}
