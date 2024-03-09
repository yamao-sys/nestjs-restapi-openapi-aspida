import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Res,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './signup.dto';
import { SignInDto } from './signin.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('sign_up')
  async signUp(@Body(ValidationPipe) signupDto: SignUpDto) {
    return this.authService.signUp(signupDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('sign_in')
  async signIn(
    @Res({ passthrough: true }) response: Response,
    @Body(ValidationPipe) signInDto: SignInDto,
  ) {
    const token = await this.authService.signIn(signInDto);
    response.cookie('token', token);
  }
}
