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
  Request,
  UseGuards,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto, UpdateTodoDto } from './todo.dto';
import { Todo } from './todo.entity';
import { AuthGuard } from 'src/auth/auth.guard';
import { JwtPayload } from 'src/interfaces/jwt-payload.interface';

@UseGuards(AuthGuard)
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async index(@Request() req: { user: JwtPayload }): Promise<Todo[]> {
    return await this.todosService.findAll(req.user.userId);
  }

  @Post()
  async create(
    @Request() req: { user: JwtPayload },
    @Body() dto: CreateTodoDto,
  ): Promise<Todo> {
    try {
      return this.todosService.create(dto, req.user.userId);
    } catch (error) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async show(
    @Request() req: { user: JwtPayload },
    @Param('id') id: string,
  ): Promise<Todo> {
    const todo = await this.todosService.read(id, req.user.userId);
    if (!todo) {
      throw new NotFoundException({ message: '該当するTODOがありません。' });
    }
    return todo;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateTodoDto,
    @Request() req: { user: JwtPayload },
  ): Promise<Todo> {
    const todo = await this.todosService.read(id, req.user.userId);
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
  async delete(
    @Request() req: { user: JwtPayload },
    @Param('id') id: string,
  ): Promise<Todo> {
    const todo = await this.todosService.read(id, req.user.userId);
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
