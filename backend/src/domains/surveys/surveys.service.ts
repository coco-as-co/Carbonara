import {
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChoicesService } from 'src/domains/choices/choices.service';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { CreateSurveysDto, UpdateSurveysDto } from './surveys.dto';
import { Survey } from './surveys.entity';

@Injectable()
export class SurveysService {
  constructor(
    @InjectRepository(Survey)
    private readonly surveysRepository: Repository<Survey>,
    @Inject(forwardRef(() => ChoicesService))
    private readonly choicesService: ChoicesService,
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
      relations: {
        choices: true,
      },
    });

    if (!data) throw new NotFoundException();

    return data;
  }

  async create(data: CreateSurveysDto): Promise<InsertResult> {
    const { content, endedAt, title, ...choices } = data;
    const survey = await this.surveysRepository.insert(data);

    console.log('choices ******************');
    console.log(choices);
    console.log('choices ******************');
    for (const choice of Object.values(choices)) {
      console.log(choice);

      if (!choice.length) continue;
      await this.choicesService.create({
        surveyId: survey.identifiers[0].id,
        content: choice,
      });
    }
    return survey;
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
