export declare enum BillType {
    ELECTRIC = "ELECTRIC",
    WATER = "WATER",
    INTERNET = "INTERNET",
    MOBILE = "MOBILE"
}
export declare const TREASURY_ACCOUNT_ID = "treasury-acc";
export declare const TAX_RATES: Record<BillType, number>;
export declare const BILL_LABELS: Record<BillType, string>;
export interface BillMeta {
    name: string;
    address: string;
    phone: string;
    code: string;
    from: string;
    to: string;
}
export interface BillPreviewResult {
    type: BillType;
    label: string;
    meta: BillMeta;
    subtotal: string;
    tax: string;
    total: string;
    taxRate: number;
}
