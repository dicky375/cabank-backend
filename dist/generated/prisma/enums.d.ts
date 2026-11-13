export declare const AccountType: {
    readonly CURRENT: "CURRENT";
    readonly SAVINGS: "SAVINGS";
    readonly DEPOSIT: "DEPOSIT";
};
export type AccountType = (typeof AccountType)[keyof typeof AccountType];
export declare const TransactionStatus: {
    readonly PENDING: "PENDING";
    readonly SUCCESS: "SUCCESS";
    readonly FAILED: "FAILED";
};
export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus];
export declare const TransactionType: {
    readonly TRANSFER_INTERNAL: "TRANSFER_INTERNAL";
    readonly TRANSFER_EXTERNAL: "TRANSFER_EXTERNAL";
    readonly BILL_PAYMENT: "BILL_PAYMENT";
    readonly WITHDRAWAL: "WITHDRAWAL";
    readonly DEPOSIT: "DEPOSIT";
};
export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType];
