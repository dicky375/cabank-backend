"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("./prisma/prisma.module");
const auth_module_1 = require("./auth/auth.module");
const ledger_module_1 = require("./ledger/ledger.module");
const transfers_module_1 = require("./transfers/transfers.module");
const accounts_module_1 = require("./accounts/accounts.module");
const bills_module_1 = require("./bills/bills.module");
const cards_module_1 = require("./cards/cards.module");
const beneficiaries_module_1 = require("./beneficiaries/beneficiaries.module");
const transactions_module_1 = require("./transactions/transactions.module");
const messages_module_1 = require("./messages/messages.module");
const withdrawals_module_1 = require("./withdrawals/withdrawals.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            ledger_module_1.LedgerModule,
            transfers_module_1.TransfersModule,
            accounts_module_1.AccountsModule,
            bills_module_1.BillsModule,
            cards_module_1.CardsModule,
            beneficiaries_module_1.BeneficiariesModule,
            transactions_module_1.TransactionsModule,
            messages_module_1.MessagesModule,
            withdrawals_module_1.WithdrawalsModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map