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
exports.BillsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const ledger_service_1 = require("../ledger/ledger.service");
const client_1 = require("../../generated/prisma/client");
const bill_types_1 = require("./bill-types");
let BillsService = class BillsService {
    constructor(prisma, ledger) {
        this.prisma = prisma;
        this.ledger = ledger;
    }
    listTypes() {
        return Object.values(bill_types_1.BillType).map((t) => ({
            type: t,
            label: bill_types_1.BILL_LABELS[t],
            taxRate: bill_types_1.TAX_RATES[t],
        }));
    }
    preview(dto) {
        const taxRate = bill_types_1.TAX_RATES[dto.type];
        const subtotal = new client_1.Prisma.Decimal(dto.amount);
        const tax = subtotal.mul(taxRate);
        const total = subtotal.plus(tax);
        return {
            type: dto.type,
            label: bill_types_1.BILL_LABELS[dto.type],
            meta: {
                name: 'Jackson Maine',
                address: '403 East 4th Street, Santa Ana',
                phone: '+8424599721',
                code: dto.customerCode ?? '#2343543',
                from: '01/10/2026',
                to: '01/11/2026',
            },
            subtotal: subtotal.toFixed(2),
            tax: tax.toFixed(2),
            total: total.toFixed(2),
            taxRate,
        };
    }
    async pay(userId, dto) {
        const sender = await this.prisma.account.findFirst({
            where: { id: dto.senderAccountId, userId },
        });
        if (!sender)
            throw new common_1.BadRequestException('Sender account not found or not yours');
        const taxRate = bill_types_1.TAX_RATES[dto.type];
        const subtotal = new client_1.Prisma.Decimal(dto.amount);
        const tax = subtotal.mul(taxRate);
        const result = await this.ledger.transfer({
            senderAccountId: dto.senderAccountId,
            receiverAccountId: bill_types_1.TREASURY_ACCOUNT_ID,
            amount: subtotal.toFixed(2),
            fee: tax.toFixed(2),
            type: client_1.TransactionType.BILL_PAYMENT,
            description: `${bill_types_1.BILL_LABELS[dto.type]}${dto.customerCode ? ` #${dto.customerCode}` : ''}`,
            creditReceiverWithFee: true,
        });
        return {
            ...result,
            bill: {
                type: dto.type,
                label: bill_types_1.BILL_LABELS[dto.type],
                subtotal: subtotal.toFixed(2),
                tax: tax.toFixed(2),
                total: subtotal.plus(tax).toFixed(2),
            },
        };
    }
    async history(userId, opts) {
        const accounts = await this.prisma.account.findMany({
            where: { userId },
            select: { id: true },
        });
        const accountIds = accounts.map((a) => a.id);
        const where = {
            senderId: { in: accountIds },
            type: client_1.TransactionType.BILL_PAYMENT,
        };
        if (opts.status)
            where.status = opts.status;
        const [transactions, total] = await Promise.all([
            this.prisma.transaction.findMany({
                where,
                orderBy: { createdAt: 'desc' },
                take: opts.limit ?? 20,
                skip: opts.offset ?? 0,
                select: {
                    id: true,
                    reference: true,
                    amount: true,
                    fee: true,
                    status: true,
                    description: true,
                    createdAt: true,
                },
            }),
            this.prisma.transaction.count({ where }),
        ]);
        return {
            total,
            limit: opts.limit ?? 20,
            offset: opts.offset ?? 0,
            transactions: transactions.map((t) => ({
                ...t,
                total: new client_1.Prisma.Decimal(t.amount).plus(t.fee).toFixed(2),
                type: this.extractBillType(t.description),
            })),
        };
    }
    extractBillType(description) {
        if (!description)
            return null;
        for (const t of Object.values(bill_types_1.BillType)) {
            if (description.startsWith(bill_types_1.BILL_LABELS[t]))
                return t;
        }
        return null;
    }
};
exports.BillsService = BillsService;
exports.BillsService = BillsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        ledger_service_1.LedgerService])
], BillsService);
//# sourceMappingURL=bills.service.js.map