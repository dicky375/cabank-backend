import { IsString, IsNotEmpty, IsEnum, IsOptional } from 'class-validator';

export enum BeneficiaryType {
  CARD = 'CARD',
  SAME_BANK = 'SAME_BANK',
  OTHER_BANK = 'OTHER_BANK',
}

export class CreateBeneficiaryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  accountNumber: string;

  @IsString()
  @IsNotEmpty()
  bankName: string;

  @IsEnum(BeneficiaryType)
  type: BeneficiaryType;
}
