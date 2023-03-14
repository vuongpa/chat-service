import { IsEmail, IsString } from 'class-validator';

export class GetTokensDto {
  @IsString()
  userId: string;

  @IsEmail()
  email: string;
}
