import {
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Survey } from '../surveys/surveys.entity';
import { SurveysService } from '../surveys/surveys.service';
import { CreateChoicesDto, UpdateChoicesDto } from './choices.dto';
import { Choice } from './choices.entity';

@Injectable()
export class ChoicesService {
  constructor(
    @InjectRepository(Choice)
    private readonly choicesRepository: Repository<Choice>,
    @Inject(forwardRef(() => SurveysService))
    private readonly surveysService: SurveysService,
  ) {}

  findAll(): Promise<Choice[]> {
    return this.choicesRepository.find({
      where: {
        deletedAt: null,
      },
    });
  }

  async findOne(id: string): Promise<Choice> {
    const data = await this.choicesRepository.findOne({
      where: {
        id,
        deletedAt: null,
      },
      relations: {
        votes: true,
      },
    });

    if (!data) throw new NotFoundException();

    return data;
  }

  async create(data: CreateChoicesDto): Promise<InsertResult> {
    const survey: Survey = await this.surveysService.findOne(data.surveyId);
    return this.choicesRepository.insert(
      this.choicesRepository.create({ ...data, survey }),
    );
  }

  async update(id: string, data: UpdateChoicesDto): Promise<UpdateResult> {
    await this.findOne(id);
    return this.choicesRepository.update(id, data);
  }

  async remove(id: string): Promise<DeleteResult> {
    await this.findOne(id);
    return this.choicesRepository.delete(id);
  }
}
