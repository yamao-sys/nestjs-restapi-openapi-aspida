import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './signup.dto';
import { SignInDto } from './signin.dto';

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
  async signIn(@Body(ValidationPipe) signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }
}
