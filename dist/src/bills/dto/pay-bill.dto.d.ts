import { BillType } from '../bill-types';
export declare class PreviewBillDto {
    type: BillType;
    amount: number;
    customerCode?: string;
}
export declare class PayBillDto {
    type: BillType;
    senderAccountId: string;
    amount: number;
    customerCode?: string;
    description?: string;
}
