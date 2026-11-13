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
exports.LedgerService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("../../generated/prisma/client");
let LedgerService = class LedgerService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async transfer(input) {
        const amount = new client_1.Prisma.Decimal(input.amount);
        const fee = new client_1.Prisma.Decimal(input.fee ?? 0);
        const totalDebit = amount.plus(fee);
        if (amount.lte(0))
            throw new common_1.BadRequestException('Amount must be greater than 0');
        const reference = this.generateReference();
        return this.executeWithRetry(() => this.prisma.$transaction(async (tx) => {
            const lockedSender = await tx.$queryRaw `
            SELECT id, balance::text AS balance, status
            FROM "Account" WHERE id = ${input.senderAccountId}
            FOR UPDATE
          `;
            if (lockedSender.length === 0)
                throw new common_1.NotFoundException('Sender account not found');
            if (lockedSender[0].status !== 'ACTIVE')
                throw new common_1.BadRequestException('Sender account is not active');
            const lockedReceiver = await tx.$queryRaw `
            SELECT id, status FROM "Account" WHERE id = ${input.receiverAccountId}
            FOR UPDATE
          `;
            if (lockedReceiver.length === 0)
                throw new common_1.NotFoundException('Receiver account not found');
            if (lockedReceiver[0].status !== 'ACTIVE')
                throw new common_1.BadRequestException('Receiver account is not active');
            const senderBalance = new client_1.Prisma.Decimal(lockedSender[0].balance);
            if (senderBalance.lt(totalDebit)) {
                throw new common_1.BadRequestException(`Insufficient funds. Balance: ${senderBalance.toFixed(2)}, required: ${totalDebit.toFixed(2)}`);
            }
            await tx.account.update({
                where: { id: input.senderAccountId },
                data: { balance: { decrement: totalDebit } },
            });
            await tx.account.update({
                where: { id: input.receiverAccountId },
                data: { balance: { increment: amount } },
            });
            const transaction = await tx.transaction.create({
                data: {
                    reference,
                    senderId: input.senderAccountId,
                    receiverId: input.receiverAccountId,
                    amount,
                    fee,
                    type: input.type,
                    status: client_1.TransactionStatus.SUCCESS,
                    description: input.description,
                },
            });
            return {
                reference: transaction.reference,
                amount: amount.toFixed(2),
                fee: fee.toFixed(2),
                status: transaction.status,
                createdAt: transaction.createdAt,
            };
        }, {
            timeout: 10000,
            isolationLevel: client_1.Prisma.TransactionIsolationLevel.RepeatableRead,
        }));
    }
    async executeWithRetry(fn, maxAttempts = 15) {
        let lastError;
        for (let attempt = 1; attempt <= maxAttempts; attempt++) {
            try {
                return await fn();
            }
            catch (err) {
                const cause = err?.meta?.driverAdapterError?.cause;
                const isWriteConflict = cause?.kind === 'TransactionWriteConflict' ||
                    cause?.originalCode === '40001' ||
                    cause?.originalCode === '40P01' ||
                    err?.code === 'P2034' ||
                    err?.message?.includes('could not serialize') ||
                    err?.message?.includes('deadlock');
                if (isWriteConflict && attempt < maxAttempts) {
                    lastError = err;
                    const delay = Math.min(2 ** attempt + Math.random() * 20, 200);
                    await new Promise((r) => setTimeout(r, delay));
                    continue;
                }
                throw err;
            }
        }
        throw lastError;
    }
    generateReference() {
        const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
        const rand = Math.random().toString(36).substring(2, 10).toUpperCase();
        return `TXN-${date}-${rand}`;
    }
};
exports.LedgerService = LedgerService;
exports.LedgerService = LedgerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LedgerService);
//# sourceMappingURL=ledger.service.js.map