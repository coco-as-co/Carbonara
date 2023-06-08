import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { AnswersService } from './answers.service';
import { CreateAnswerDto, UpdateAnswerDto } from './answers.dto';

@Controller('answers')
export class AnswersController {
  constructor(private readonly answersService: AnswersService) {}

  @Get()
  public async getAllAnswers() {
    return await this.answersService.findAll();
  }

  @Get(':id')
  public async getOneAnswer(@Param('id', ParseUUIDPipe) id: string) {
    if (!id) throw new Error("La réponse n'existe pas");
    return await this.answersService.findOne(id);
  }

  @Post()
  public async createAnswer(@Body() answer: CreateAnswerDto) {
    return await this.answersService.create(answer);
  }

  @Patch(':id')
  public async updateAnswer(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() answer: UpdateAnswerDto,
  ) {
    if (!id) throw new Error("La réponse n'existe pas");
    return await this.answersService.update(id, answer);
  }

  @Delete(':id')
  public async deleteAnswer(@Param('id', ParseUUIDPipe) id: string) {
    if (!id) throw new Error('Answer id not provided');
    return await this.answersService.delete(id);
  }
}
