import { IsNotEmpty } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty({ message: 'メールアドレスは必須です。' })
  email: string;

  @IsNotEmpty({ message: 'パスワードは必須です。' })
  password: string;
}
