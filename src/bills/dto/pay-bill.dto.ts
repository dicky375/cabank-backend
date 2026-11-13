import { IsEnum, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { BillType } from '../bill-types';

export class PreviewBillDto {
  @IsEnum(BillType)
  type: BillType;

  @IsNumber()
  @Min(1)
  @Type(() => Number)
  amount: number;

  @IsOptional()
  @IsString()
  customerCode?: string;
}

export class PayBillDto {
  @IsEnum(BillType)
  type: BillType;

  @IsString()
  senderAccountId: string;

  @IsNumber()
  @Min(1)
  @Type(() => Number)
  amount: number;

  @IsOptional()
  @IsString()
  customerCode?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
