import { IsString, IsNotEmpty, Matches, IsDateString } from 'class-validator';

export class CreateCardDto {
  @IsString()
  @IsNotEmpty()
  accountId: string;

  @IsString()
  @Matches(/^\d{13,19}$/, { message: 'cardNumber must be 13-19 digits' })
  cardNumber: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{3,4}$/, { message: 'cvv must be 3-4 digits' })
  cvv: string;

  @IsDateString()
  expiryDate: string;

  @IsString()
  holderName: string;
}
