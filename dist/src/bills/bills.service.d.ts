import { PrismaService } from '../prisma/prisma.service';
import { LedgerService } from '../ledger/ledger.service';
import { TransactionStatus } from '../../generated/prisma/client';
import { BillType, BillPreviewResult } from './bill-types';
import { PayBillDto, PreviewBillDto } from './dto/pay-bill.dto';
export declare class BillsService {
    private prisma;
    private ledger;
    constructor(prisma: PrismaService, ledger: LedgerService);
    listTypes(): {
        type: BillType;
        label: string;
        taxRate: number;
    }[];
    preview(dto: PreviewBillDto): BillPreviewResult;
    pay(userId: string, dto: PayBillDto): Promise<{
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
        status: TransactionStatus;
        createdAt: Date;
    }>;
    history(userId: string, opts: {
        type?: BillType;
        status?: TransactionStatus;
        limit?: number;
        offset?: number;
    }): Promise<{
        total: number;
        limit: number;
        offset: number;
        transactions: {
            total: string;
            type: BillType | null;
            id: string;
            createdAt: Date;
            status: TransactionStatus;
            reference: string;
            amount: import("@prisma/client-runtime-utils").Decimal;
            fee: import("@prisma/client-runtime-utils").Decimal;
            description: string | null;
        }[];
    }>;
    private extractBillType;
}
