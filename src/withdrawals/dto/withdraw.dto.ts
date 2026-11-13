import { IsString, IsNotEmpty, IsNumber, Min, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class WithdrawDto {
  @IsString()
  @IsNotEmpty()
  accountId: string;

  @IsString()
  @IsNotEmpty()
  cardId: string;

  @IsNumber()
  @Min(1)
  @Type(() => Number)
  amount: number;

  @IsOptional()
  @IsString()
  description?: string;
}
