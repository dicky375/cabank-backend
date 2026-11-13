export enum BillType {
  ELECTRIC = 'ELECTRIC',
  WATER = 'WATER',
  INTERNET = 'INTERNET',
  MOBILE = 'MOBILE',
}

export const TREASURY_ACCOUNT_ID = 'treasury-acc';

/** Tax rate per bill type (e.g. 0.05 = 5%) */
export const TAX_RATES: Record<BillType, number> = {
  [BillType.ELECTRIC]: 0.05,
  [BillType.WATER]: 0.03,
  [BillType.INTERNET]: 0.05,
  [BillType.MOBILE]: 0.02,
};

/** Human-friendly labels for the UI */
export const BILL_LABELS: Record<BillType, string> = {
  [BillType.ELECTRIC]: 'Electric bill',
  [BillType.WATER]: 'Water bill',
  [BillType.INTERNET]: 'Internet bill',
  [BillType.MOBILE]: 'Mobile bill',
};

/** Utility account info that real bills would include */
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
