import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto, UpdateTodoDto } from './todo.dto';
import { Todo } from './todo.entity';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async index(): Promise<Todo[]> {
    return await this.todosService.findAll();
  }

  @Post()
  async create(@Body() dto: CreateTodoDto): Promise<Todo> {
    try {
      return this.todosService.create(dto);
    } catch (error) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<Todo> {
    const todo = await this.todosService.read(id);
    if (!todo) {
      throw new NotFoundException({ message: '該当するTODOがありません。' });
    }
    return todo;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateTodoDto,
  ): Promise<Todo> {
    const todo = await this.todosService.read(id);
    if (!todo) {
      throw new NotFoundException({ message: '該当するTODOがありません。' });
    }
    try {
      return await this.todosService.update(todo, dto);
    } catch (error) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Todo> {
    const todo = await this.todosService.read(id);
    if (!todo) {
      throw new NotFoundException({ message: '該当するTODOがありません。' });
    }
    try {
      return await this.todosService.delete(todo);
    } catch (error) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
