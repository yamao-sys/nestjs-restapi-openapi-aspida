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

  async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async create(dto: CreateTodoDto): Promise<Todo> {
    return await this.todoRepository.save(dto);
  }

  async read(id: string): Promise<Todo> {
    return await this.todoRepository.findOneBy({ id: id });
  }

  async update(todo: Todo, dto: UpdateTodoDto): Promise<Todo> {
    return await this.todoRepository.save({ ...todo, ...dto });
  }

  async delete(todo: Todo): Promise<Todo> {
    return await this.todoRepository.remove(todo);
  }
}
