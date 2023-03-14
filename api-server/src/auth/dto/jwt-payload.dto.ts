import { IsString } from 'class-validator';

export class JwtPayloadDto {
  @IsString()
  accessTokenExpiredIn: string;

  @IsString()
  accessToken: string;

  @IsString()
  refreshToken: string;
}
