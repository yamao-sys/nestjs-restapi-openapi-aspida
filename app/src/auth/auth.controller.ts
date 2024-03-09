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
import { SignInDto } from './signin.dto';
import { Response } from 'express';
import { SignUpDto, SignUpResult } from 'api/@types';
import { ApiCreatedResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  // @ApiResponseデコレータは型側に@ApiProperty()の付与が必要で自動生成したファイルそのまま使用できず
  // → アクションの戻り値で自動生成された型を指定
  // 参考: https://docs.nestjs.com/openapi/operations
  @ApiCreatedResponse({ description: 'sign up完了' })
  @Post('sign_up')
  async signUp(
    @Body(ValidationPipe) signupDto: SignUpDto,
  ): Promise<SignUpResult> {
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
