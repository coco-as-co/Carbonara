import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Question } from './questions.entity';
import { CreateQuestionDto, UpdateQuestionDto } from './questions.dto';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Question)
    private readonly questionsRepository: Repository<Question>,
  ) {}

  async findAll(): Promise<Question[]> {
    return this.questionsRepository.find();
  }

  async findOne(id: string): Promise<Question> {
    const data = await this.questionsRepository.findOne({
      where: {
        id,
        deletedAt: null,
      },
    });
    if (!data) throw new Error("La question n'existe pas");

    return data;
  }

  async create(data: CreateQuestionDto): Promise<InsertResult> {
    return this.questionsRepository.insert(data);
  }

  async update(id: string, data: UpdateQuestionDto): Promise<UpdateResult> {
    await this.findOne(id);
    return this.questionsRepository.update(id, data);
  }

  async delete(id: string): Promise<DeleteResult> {
    await this.findOne(id);
    return this.questionsRepository.softDelete(id);
  }
}
