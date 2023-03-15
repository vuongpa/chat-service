import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RequestSignInDto } from './dto/request-sign-in.dto';
import { JwtGuard } from './guards/jwt.guard';
import { JwtPayloadDto } from './dto/jwt-payload.dto';
import { RequestSignUpDto } from './dto/request-sign-up.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() requestSignUp: RequestSignUpDto) {
    try {
      return await this.authService.signUp(requestSignUp);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('signin')
  async signIn(@Body() requestSignIn: RequestSignInDto) {
    try {
      return await this.authService.signIn(requestSignIn);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtGuard)
  @Get('logout')
  async logout(@Request() request) {
    await this.authService.logout(request.user.id);
  }

  @Post('refresh')
  async refreshToken(
    @Body() { userId, refreshToken }: { userId: string; refreshToken: string },
  ): Promise<JwtPayloadDto> {
    try {
      return await this.authService.refreshAccessToken(userId, refreshToken);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtGuard)
  @Get('profile')
  async getProfile(@Request() request) {
    return request.user;
  }
}
