export declare enum BeneficiaryType {
    CARD = "CARD",
    SAME_BANK = "SAME_BANK",
    OTHER_BANK = "OTHER_BANK"
}
export declare class CreateBeneficiaryDto {
    name: string;
    accountNumber: string;
    bankName: string;
    type: BeneficiaryType;
}
