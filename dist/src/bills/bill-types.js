"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BILL_LABELS = exports.TAX_RATES = exports.TREASURY_ACCOUNT_ID = exports.BillType = void 0;
var BillType;
(function (BillType) {
    BillType["ELECTRIC"] = "ELECTRIC";
    BillType["WATER"] = "WATER";
    BillType["INTERNET"] = "INTERNET";
    BillType["MOBILE"] = "MOBILE";
})(BillType || (exports.BillType = BillType = {}));
exports.TREASURY_ACCOUNT_ID = 'treasury-acc';
exports.TAX_RATES = {
    [BillType.ELECTRIC]: 0.05,
    [BillType.WATER]: 0.03,
    [BillType.INTERNET]: 0.05,
    [BillType.MOBILE]: 0.02,
};
exports.BILL_LABELS = {
    [BillType.ELECTRIC]: 'Electric bill',
    [BillType.WATER]: 'Water bill',
    [BillType.INTERNET]: 'Internet bill',
    [BillType.MOBILE]: 'Mobile bill',
};
//# sourceMappingURL=bill-types.js.map