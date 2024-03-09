import { IsNotEmpty } from 'class-validator';

export class SignInDto {
  @IsNotEmpty({ message: 'メールアドレスは必須項目です。' })
  email: string;

  @IsNotEmpty({ message: 'パスワードは必須項目です。' })
  password: string;
}
