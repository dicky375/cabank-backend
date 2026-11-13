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
exports.AccountsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("../../generated/prisma/client");
let AccountsService = class AccountsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async listForUser(userId) {
        return this.prisma.account.findMany({
            where: { userId },
            orderBy: { createdAt: 'asc' },
            select: {
                id: true,
                accountNumber: true,
                type: true,
                balance: true,
                branch: true,
                status: true,
                createdAt: true,
            },
        });
    }
    async findOne(userId, accountId) {
        const account = await this.prisma.account.findFirst({
            where: { id: accountId, userId },
            select: {
                id: true,
                accountNumber: true,
                type: true,
                balance: true,
                branch: true,
                status: true,
                createdAt: true,
                cards: {
                    select: {
                        id: true,
                        cardNumber: true,
                        brand: true,
                        expiryDate: true,
                        status: true,
                    },
                },
            },
        });
        if (!account)
            throw new common_1.NotFoundException('Account not found');
        return account;
    }
    async summaryForUser(userId) {
        const accounts = await this.prisma.account.findMany({
            where: { userId },
            select: { id: true, balance: true, type: true, status: true },
        });
        const total = accounts.reduce((sum, acc) => sum.plus(acc.balance), new client_1.Prisma.Decimal(0));
        return {
            accountCount: accounts.length,
            totalBalance: total.toFixed(2),
            accounts,
        };
    }
};
exports.AccountsService = AccountsService;
exports.AccountsService = AccountsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AccountsService);
//# sourceMappingURL=accounts.service.js.map