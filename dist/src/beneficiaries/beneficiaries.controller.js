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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeneficiariesController = void 0;
const common_1 = require("@nestjs/common");
const beneficiaries_service_1 = require("./beneficiaries.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const create_beneficiary_dto_1 = require("./dto/create-beneficiary.dto");
let BeneficiariesController = class BeneficiariesController {
    constructor(beneficiaries) {
        this.beneficiaries = beneficiaries;
    }
    list(user) {
        return this.beneficiaries.listGrouped(user.id);
    }
    create(user, dto) {
        return this.beneficiaries.create(user.id, dto);
    }
    remove(user, id) {
        return this.beneficiaries.remove(user.id, id);
    }
};
exports.BeneficiariesController = BeneficiariesController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BeneficiariesController.prototype, "list", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_beneficiary_dto_1.CreateBeneficiaryDto]),
    __metadata("design:returntype", void 0)
], BeneficiariesController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], BeneficiariesController.prototype, "remove", null);
exports.BeneficiariesController = BeneficiariesController = __decorate([
    (0, common_1.Controller)('beneficiaries'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [beneficiaries_service_1.BeneficiariesService])
], BeneficiariesController);
//# sourceMappingURL=beneficiaries.controller.js.map