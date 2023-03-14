import { IsEmail, IsString } from 'class-validator';

export class RequestSignInDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
