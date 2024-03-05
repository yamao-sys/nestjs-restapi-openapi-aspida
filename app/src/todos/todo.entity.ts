import { IsNotEmpty, Length } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('todos')
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @IsNotEmpty({ message: 'タイトルは必須です。' })
  @Length(1, 255, {
    message: '$constraint1文字以上$constraint2文字以下での入力をお願いします。',
  })
  @Column()
  title!: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  content!: string;
}
