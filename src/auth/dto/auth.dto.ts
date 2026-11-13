import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignUpDto {
  @IsString() @IsNotEmpty() firstName: string;
  @IsString() @IsNotEmpty() lastName: string;
  @IsEmail() email: string;
  @IsString() @IsNotEmpty() phone: string;
  @IsString() @MinLength(6) password: string;
}

export class SignInDto {
  @IsEmail() email: string;
  @IsString() @IsNotEmpty() password: string;
}
