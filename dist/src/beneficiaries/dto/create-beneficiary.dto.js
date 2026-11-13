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
exports.CreateBeneficiaryDto = exports.BeneficiaryType = void 0;
const class_validator_1 = require("class-validator");
var BeneficiaryType;
(function (BeneficiaryType) {
    BeneficiaryType["CARD"] = "CARD";
    BeneficiaryType["SAME_BANK"] = "SAME_BANK";
    BeneficiaryType["OTHER_BANK"] = "OTHER_BANK";
})(BeneficiaryType || (exports.BeneficiaryType = BeneficiaryType = {}));
class CreateBeneficiaryDto {
}
exports.CreateBeneficiaryDto = CreateBeneficiaryDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateBeneficiaryDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateBeneficiaryDto.prototype, "accountNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateBeneficiaryDto.prototype, "bankName", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(BeneficiaryType),
    __metadata("design:type", String)
], CreateBeneficiaryDto.prototype, "type", void 0);
//# sourceMappingURL=create-beneficiary.dto.js.map