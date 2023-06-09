import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Survey } from './surveys.entity';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { CreateSurveysDto, UpdateSurveysDto } from './surveys.dto';

@Injectable()
export class SurveysService {
  constructor(
    @InjectRepository(Survey)
    private readonly surveysRepository: Repository<Survey>,
  ) {}

  findAll(): Promise<Survey[]> {
    return this.surveysRepository.find({
      where: {
        deletedAt: null,
      },
    });
  }

  async findOne(id: string): Promise<Survey> {
    const data = await this.surveysRepository.findOne({
      where: {
        id,
        deletedAt: null,
      },
    });

    if (!data) throw new NotFoundException();

    return data;
  }

  async create(data: CreateSurveysDto): Promise<InsertResult> {
    return this.surveysRepository.insert(data);
  }

  async update(id: string, data: UpdateSurveysDto): Promise<UpdateResult> {
    await this.findOne(id);
    return this.surveysRepository.update(id, data);
  }

  async remove(id: string): Promise<DeleteResult> {
    await this.findOne(id);
    return this.surveysRepository.delete(id);
  }
}
