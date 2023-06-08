import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto, UpdateQuestionDto } from './questions.dto';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get()
  public async getAllQuestions() {
    return await this.questionsService.findAll();
  }

  @Get(':id')
  public async getOneQuestion(@Param('id', ParseUUIDPipe) id: string) {
    if (!id) throw new Error("La question n'existe pas");
    return await this.questionsService.findOne(id);
  }

  @Post()
  public async createQuestion(@Body() question: CreateQuestionDto) {
    return await this.questionsService.create(question);
  }
  @Patch(':id')
  public async updateQuestion(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() question: UpdateQuestionDto,
  ) {
    if (!id) throw new Error("La question n'existe pas");
    return await this.questionsService.update(id, question);
  }

  @Delete(':id')
  public async deleteQuestion(@Param('id', ParseUUIDPipe) id: string) {
    if (!id) throw new Error('Question id not provided');
    return await this.questionsService.delete(id);
  }
}
