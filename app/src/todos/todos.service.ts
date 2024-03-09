import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto, UpdateTodoDto } from './todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async findAll(userId: string): Promise<Todo[]> {
    return await this.todoRepository.find({
      where: { userId },
    });
  }

  async create(dto: CreateTodoDto, userId: string): Promise<Todo> {
    const todo = new Todo();
    todo.title = dto.title;
    todo.content = dto.content;
    todo.userId = userId;

    return await this.todoRepository.save(todo);
  }

  async read(id: string, userId: string): Promise<Todo> {
    return await this.todoRepository.findOneBy({ id, userId });
  }

  async update(todo: Todo, dto: UpdateTodoDto): Promise<Todo> {
    return await this.todoRepository.save({ ...todo, ...dto });
  }

  async delete(todo: Todo): Promise<Todo> {
    return await this.todoRepository.remove(todo);
  }
}
