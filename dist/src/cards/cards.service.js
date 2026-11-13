"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = __importStar(require("bcrypt"));
let CardsService = class CardsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    maskCardNumber(cardNumber) {
        if (cardNumber.length < 8)
            return cardNumber;
        const first4 = cardNumber.slice(0, 4);
        const last4 = cardNumber.slice(-4);
        const masked = '*'.repeat(cardNumber.length - 8);
        return `${first4} ${masked} ${last4}`;
    }
    formatCard(card) {
        return {
            id: card.id,
            cardNumber: this.maskCardNumber(card.cardNumber),
            last4: card.cardNumber.slice(-4),
            brand: card.brand,
            status: card.status,
            expiryDate: card.expiryDate,
            createdAt: card.createdAt,
            account: card.account
                ? {
                    id: card.account.id,
                    accountNumber: card.account.accountNumber,
                    balance: card.account.balance,
                }
                : undefined,
        };
    }
    async listForUser(userId) {
        const cards = await this.prisma.card.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
            include: {
                account: {
                    select: { id: true, accountNumber: true, balance: true },
                },
            },
        });
        return cards.map((c) => this.formatCard(c));
    }
    async findOne(userId, cardId) {
        const card = await this.prisma.card.findFirst({
            where: { id: cardId, userId },
            include: {
                account: {
                    select: { id: true, accountNumber: true, balance: true },
                },
            },
        });
        if (!card)
            throw new common_1.NotFoundException('Card not found');
        return this.formatCard(card);
    }
    async create(userId, dto) {
        const account = await this.prisma.account.findFirst({
            where: { id: dto.accountId, userId },
        });
        if (!account)
            throw new common_1.BadRequestException('Account not found or not yours');
        const existing = await this.prisma.card.findUnique({
            where: { cardNumber: dto.cardNumber },
        });
        if (existing)
            throw new common_1.BadRequestException('Card number already registered');
        const cvvHash = await bcrypt.hash(dto.cvv, 10);
        const card = await this.prisma.card.create({
            data: {
                userId,
                accountId: dto.accountId,
                cardNumber: dto.cardNumber,
                expiryDate: new Date(dto.expiryDate),
                cvvHash,
                brand: this.detectBrand(dto.cardNumber),
                status: 'ACTIVE',
            },
            include: {
                account: {
                    select: { id: true, accountNumber: true, balance: true },
                },
            },
        });
        return this.formatCard(card);
    }
    async remove(userId, cardId) {
        const card = await this.prisma.card.findFirst({
            where: { id: cardId, userId },
        });
        if (!card)
            throw new common_1.NotFoundException('Card not found');
        await this.prisma.card.delete({ where: { id: cardId } });
        return { success: true, deletedId: cardId };
    }
    detectBrand(cardNumber) {
        if (cardNumber.startsWith('4'))
            return 'VISA';
        if (/^5[1-5]/.test(cardNumber))
            return 'MASTERCARD';
        if (/^3[47]/.test(cardNumber))
            return 'AMEX';
        return 'VISA';
    }
};
exports.CardsService = CardsService;
exports.CardsService = CardsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CardsService);
//# sourceMappingURL=cards.service.js.map