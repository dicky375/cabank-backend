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
exports.WithdrawalsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const ledger_service_1 = require("../ledger/ledger.service");
const client_1 = require("../../generated/prisma/client");
const WITHDRAWAL_FEE_RATE = 0.01;
let WithdrawalsService = class WithdrawalsService {
    constructor(prisma, ledger) {
        this.prisma = prisma;
        this.ledger = ledger;
    }
    async withdraw(userId, dto) {
        const account = await this.prisma.account.findFirst({
            where: { id: dto.accountId, userId },
        });
        if (!account)
            throw new common_1.BadRequestException('Account not found or not yours');
        const card = await this.prisma.card.findFirst({
            where: { id: dto.cardId, userId, accountId: dto.accountId },
        });
        if (!card)
            throw new common_1.BadRequestException('Card not found or not linked to this account');
        const fee = new client_1.Prisma.Decimal(dto.amount).mul(WITHDRAWAL_FEE_RATE);
        const result = await this.ledger.transfer({
            senderAccountId: dto.accountId,
            receiverAccountId: 'treasury-acc',
            amount: String(dto.amount),
            fee: fee.toFixed(2),
            type: client_1.TransactionType.WITHDRAWAL,
            description: dto.description ?? `Withdrawal to card ${card.cardNumber.slice(-4)}`,
            creditReceiverWithFee: true,
        });
        return {
            ...result,
            withdrawal: {
                cardLast4: card.cardNumber.slice(-4),
                amount: new client_1.Prisma.Decimal(dto.amount).toFixed(2),
                fee: fee.toFixed(2),
                total: new client_1.Prisma.Decimal(dto.amount).plus(fee).toFixed(2),
            },
        };
    }
    async history(userId) {
        const accountIds = (await this.prisma.account.findMany({
            where: { userId },
            select: { id: true },
        })).map((a) => a.id);
        const txs = await this.prisma.transaction.findMany({
            where: { senderId: { in: accountIds }, type: client_1.TransactionType.WITHDRAWAL },
            orderBy: { createdAt: 'desc' },
            take: 50,
        });
        return {
            total: txs.length,
            withdrawals: txs.map((t) => ({
                id: t.id,
                reference: t.reference,
                amount: t.amount,
                fee: t.fee,
                status: t.status,
                description: t.description,
                createdAt: t.createdAt,
            })),
        };
    }
};
exports.WithdrawalsService = WithdrawalsService;
exports.WithdrawalsService = WithdrawalsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        ledger_service_1.LedgerService])
], WithdrawalsService);
//# sourceMappingURL=withdrawals.service.js.map