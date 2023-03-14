import { IsEmail } from 'class-validator';

export class RequestCreateUserDto {
  @IsEmail()
  email: string;
}
