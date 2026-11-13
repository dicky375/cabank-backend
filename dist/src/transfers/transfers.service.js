"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransfersService = void 0;
const common_1 = require("@nestjs/common");
const ledger_service_1 = require("../ledger/ledger.service");
const client_1 = require("../../generated/prisma/client");
let TransfersService = class TransfersService {
    constructor(ledger) {
        this.ledger = ledger;
    }
    async internalTransfer(dto) {
        return this.ledger.transfer({
            senderAccountId: dto.senderAccountId,
            receiverAccountId: dto.receiverAccountId,
            amount: dto.amount,
            fee: dto.fee,
            type: client_1.TransactionType.TRANSFER_INTERNAL,
            description: dto.description,
        });
    }
};
exports.TransfersService = TransfersService;
exports.TransfersService = TransfersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [ledger_service_1.LedgerService])
], TransfersService);
//# sourceMappingURL=transfers.service.js.map