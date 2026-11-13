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
exports.BeneficiariesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const create_beneficiary_dto_1 = require("./dto/create-beneficiary.dto");
let BeneficiariesService = class BeneficiariesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async listGrouped(userId) {
        const all = await this.prisma.beneficiary.findMany({
            where: { userId },
            orderBy: { name: 'asc' },
        });
        return {
            byCard: all.filter((b) => b.type === create_beneficiary_dto_1.BeneficiaryType.CARD),
            sameBank: all.filter((b) => b.type === create_beneficiary_dto_1.BeneficiaryType.SAME_BANK),
            otherBank: all.filter((b) => b.type === create_beneficiary_dto_1.BeneficiaryType.OTHER_BANK),
            total: all.length,
        };
    }
    async create(userId, dto) {
        const existing = await this.prisma.beneficiary.findFirst({
            where: { userId, accountNumber: dto.accountNumber },
        });
        if (existing) {
            throw new common_1.BadRequestException('Beneficiary with this account number already exists');
        }
        return this.prisma.beneficiary.create({
            data: {
                userId,
                name: dto.name,
                accountNumber: dto.accountNumber,
                bankName: dto.bankName,
                type: dto.type,
            },
        });
    }
    async remove(userId, id) {
        const b = await this.prisma.beneficiary.findFirst({
            where: { id, userId },
        });
        if (!b)
            throw new common_1.NotFoundException('Beneficiary not found');
        await this.prisma.beneficiary.delete({ where: { id } });
        return { success: true, deletedId: id };
    }
};
exports.BeneficiariesService = BeneficiariesService;
exports.BeneficiariesService = BeneficiariesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BeneficiariesService);
//# sourceMappingURL=beneficiaries.service.js.map