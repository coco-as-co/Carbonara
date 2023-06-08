import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import { Answer } from './answers.entity';
import { CreateAnswerDto, UpdateAnswerDto } from './answers.dto';
import { QuestionsService } from '../questions/questions.service';

@Injectable()
export class AnswersService {
  constructor(
    @InjectRepository(Answer)
    private readonly answersRepository: Repository<Answer>,
    private readonly questionsService: QuestionsService,
  ) {}

  async findAll(): Promise<Answer[]> {
    const data = await this.answersRepository.find({
      where: {
        deletedAt: null,
      },
    });
    if (!data) throw new Error("La réponse n'existe pas");

    return data;
  }

  async findOne(id: string): Promise<Answer> {
    const data = await this.answersRepository.findOne({
      where: {
        id,
        deletedAt: null,
      },
    });
    if (!data) throw new Error("La réponse n'existe pas");

    return data;
  }

  async create(data: CreateAnswerDto): Promise<InsertResult> {
    const question = await this.questionsService.findOne(data.question.id);
    if (!question) throw new Error("La question n'existe pas");
    return this.answersRepository.insert(data);
  }

  async update(id: string, data: UpdateAnswerDto): Promise<UpdateResult> {
    await this.findOne(id);
    return this.answersRepository.update(id, data);
  }

  async delete(id: string): Promise<DeleteResult> {
    await this.findOne(id);
    return this.answersRepository.softDelete(id);
  }
}
