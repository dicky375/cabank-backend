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
exports.MessagesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let MessagesService = class MessagesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async list(userId) {
        const messages = await this.prisma.message.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
            take: 50,
        });
        const unreadCount = messages.filter((m) => !m.readAt).length;
        return { unreadCount, messages };
    }
    async create(userId, dto) {
        return this.prisma.message.create({
            data: {
                userId,
                sender: dto.sender,
                title: dto.title,
                body: dto.body,
                iconType: dto.iconType ?? 'default',
            },
        });
    }
    async markRead(userId, id) {
        const msg = await this.prisma.message.findFirst({
            where: { id, userId },
        });
        if (!msg)
            throw new common_1.NotFoundException('Message not found');
        return this.prisma.message.update({
            where: { id },
            data: { readAt: new Date() },
        });
    }
    async markAllRead(userId) {
        const result = await this.prisma.message.updateMany({
            where: { userId, readAt: null },
            data: { readAt: new Date() },
        });
        return { updated: result.count };
    }
};
exports.MessagesService = MessagesService;
exports.MessagesService = MessagesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MessagesService);
//# sourceMappingURL=messages.service.js.map