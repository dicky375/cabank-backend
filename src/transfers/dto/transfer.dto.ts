import { IsString, IsNotEmpty, IsOptional, IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class TransferDto {
  @IsString() @IsNotEmpty() senderAccountId: string;
  @IsString() @IsNotEmpty() receiverAccountId: string;
  @IsNumber() @Min(0.01) @Type(() => Number) amount: number;
  @IsOptional() @IsNumber() @Min(0) @Type(() => Number) fee?: number;
  @IsOptional() @IsString() description?: string;
}
