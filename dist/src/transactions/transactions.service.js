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
exports.TransactionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("../../generated/prisma/client");
let TransactionsService = class TransactionsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getUserAccountIds(userId) {
        const accounts = await this.prisma.account.findMany({
            where: { userId },
            select: { id: true },
        });
        return accounts.map((a) => a.id);
    }
    async list(userId, query) {
        const accountIds = await this.getUserAccountIds(userId);
        const where = {
            OR: [
                { senderId: { in: accountIds } },
                { receiverId: { in: accountIds } },
            ],
        };
        if (query.type)
            where.type = query.type;
        if (query.status)
            where.status = query.status;
        if (query.from || query.to) {
            where.createdAt = {};
            if (query.from)
                where.createdAt.gte = new Date(query.from);
            if (query.to)
                where.createdAt.lte = new Date(query.to);
        }
        const limit = query.limit ?? 20;
        const offset = query.offset ?? 0;
        const [transactions, total] = await Promise.all([
            this.prisma.transaction.findMany({
                where,
                orderBy: { createdAt: 'desc' },
                take: limit,
                skip: offset,
            }),
            this.prisma.transaction.count({ where }),
        ]);
        return {
            total,
            limit,
            offset,
            transactions: transactions.map((t) => ({
                id: t.id,
                reference: t.reference,
                amount: t.amount,
                fee: t.fee,
                type: t.type,
                status: t.status,
                description: t.description,
                createdAt: t.createdAt,
                direction: accountIds.includes(t.senderId) ? 'DEBIT' : 'CREDIT',
            })),
        };
    }
    async analytics(userId, months = 6) {
        const accountIds = await this.getUserAccountIds(userId);
        if (accountIds.length === 0) {
            return { months: [], incomeTotal: '0.00', expenseTotal: '0.00' };
        }
        const since = new Date();
        since.setMonth(since.getMonth() - months);
        since.setDate(1);
        since.setHours(0, 0, 0, 0);
        const txs = await this.prisma.transaction.findMany({
            where: {
                OR: [
                    { senderId: { in: accountIds } },
                    { receiverId: { in: accountIds } },
                ],
                status: client_1.TransactionStatus.SUCCESS,
                createdAt: { gte: since },
            },
            orderBy: { createdAt: 'asc' },
        });
        const buckets = new Map();
        for (let i = months - 1; i >= 0; i--) {
            const d = new Date();
            d.setMonth(d.getMonth() - i);
            const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
            buckets.set(key, { income: new client_1.Prisma.Decimal(0), expense: new client_1.Prisma.Decimal(0), count: 0 });
        }
        for (const t of txs) {
            const key = `${t.createdAt.getFullYear()}-${String(t.createdAt.getMonth() + 1).padStart(2, '0')}`;
            if (!buckets.has(key)) {
                buckets.set(key, { income: new client_1.Prisma.Decimal(0), expense: new client_1.Prisma.Decimal(0), count: 0 });
            }
            const b = buckets.get(key);
            if (accountIds.includes(t.senderId)) {
                b.expense = b.expense.plus(t.amount).plus(t.fee);
            }
            else {
                b.income = b.income.plus(t.amount);
            }
            b.count += 1;
        }
        let incomeTotal = new client_1.Prisma.Decimal(0);
        let expenseTotal = new client_1.Prisma.Decimal(0);
        const monthsArr = Array.from(buckets.entries())
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([month, b]) => {
            incomeTotal = incomeTotal.plus(b.income);
            expenseTotal = expenseTotal.plus(b.expense);
            return {
                month,
                label: new Date(month + '-01').toLocaleString('en-US', { month: 'short' }),
                income: b.income.toFixed(2),
                expense: b.expense.toFixed(2),
                count: b.count,
            };
        });
        return {
            months: monthsArr,
            incomeTotal: incomeTotal.toFixed(2),
            expenseTotal: expenseTotal.toFixed(2),
        };
    }
};
exports.TransactionsService = TransactionsService;
exports.TransactionsService = TransactionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TransactionsService);
//# sourceMappingURL=transactions.service.js.map