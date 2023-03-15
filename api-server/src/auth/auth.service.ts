import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserRepository } from '../user/user.repository';
import { JwtService } from '@nestjs/jwt';
import { JwtPayloadDto } from './dto/jwt-payload.dto';
import { GetTokensDto } from './dto/get-tokens.dto';
import { RequestCreateUserDto } from '../user/dto/create-user.dto';
import { User } from '../user/schemas/user.schema';
import { RequestSignInDto } from './dto/request-sign-in.dto';
import { hash, compare } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly config: ConfigService,
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(requestCreateUser: RequestCreateUserDto): Promise<User> {
    return await this.userRepository.create(requestCreateUser);
  }

  async signIn({ email, password }: RequestSignInDto): Promise<JwtPayloadDto> {
    const user = await this.userRepository.findOne({
      filter: {
        email,
      },
    });
    if (!user) {
      throw Error(`Email is incorrect`);
    }

    const passwordHashed = await this.hash(password);
    const isMatchingPassword = await this.compare(
      passwordHashed,
      user.password,
    );

    if (isMatchingPassword) {
      throw Error('Password is incorrect');
    }

    const jwtTokens = await this.getTokens({ userId: user.id, email });
    await this.updateRefreshToken(user.id, jwtTokens.refreshToken);

    return jwtTokens;
  }

  async logout(userId: string) {
    await this.userRepository.findByIdAndUpdate(userId, { refreshToken: null });
  }

  async getTokens({ email, userId }: GetTokensDto): Promise<JwtPayloadDto> {
    const refreshTokenExpiredIn = this.config.get('JWT_REFRESH_TOKEN_EXPIRED');
    const accessTokenExpiredIn = this.config.get('JWT_ACCESS_TOKEN_EXPIRED');
    const jwtRefSecret = this.config.get('JWT_REFRESH_TOKEN_SECRET');

    const refreshToken = await this.jwtService.signAsync(
      { username: email, sub: userId },
      { secret: jwtRefSecret, expiresIn: refreshTokenExpiredIn },
    );

    return {
      accessToken: this.jwtService.sign({ username: email, sub: userId }),
      refreshToken,
      accessTokenExpiredIn,
    };
  }

  async updateRefreshToken(
    userId: string,
    refreshToken: string,
  ): Promise<void> {
    await this.userRepository.findByIdAndUpdate(userId, { refreshToken });
  }

  async hash(tx: string) {
    return hash(tx, 12);
  }

  async compare(p1, p2) {
    return compare(p1, p2);
  }

  async refreshAccessToken(
    userId: string,
    refreshToken: string,
  ): Promise<JwtPayloadDto> {
    const user = await this.userRepository.findById(userId);

    if (user.refreshToken !== refreshToken) {
      throw Error('Refresh token not match');
    }

    const accessTokenExpiredIn = this.config.get('JWT_ACCESS_TOKEN_EXPIRED');
    const newAccessToken = await this.jwtService.signAsync(
      { email: user.email, userId },
      {
        secret: this.config.get('JWT_ACCESS_TOKEN_SECRET'),
        expiresIn: accessTokenExpiredIn,
      },
    );

    return {
      accessToken: newAccessToken,
      refreshToken,
      accessTokenExpiredIn,
    };
  }
}
