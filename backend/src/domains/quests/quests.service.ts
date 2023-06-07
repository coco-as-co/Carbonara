import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository, UpdateResult } from 'typeorm';
import { Quest } from './quests.entity';
import { CreateQuestDto, UpdateQuestDto } from './quests.dto';

@Injectable()
export class QuestsService {
  constructor(
    @InjectRepository(Quest)
    private readonly questsRepository: Repository<Quest>,
  ) {}

  async findAll(): Promise<Quest[]> {
    return this.questsRepository.find();
  }

  async findOne(id: string): Promise<Quest> {
    const quest = await this.questsRepository.findOneBy({ id });
    if (!quest) throw new Error('Quest not found');
    return quest;
  }

  async create(data: CreateQuestDto): Promise<InsertResult> {
    return this.questsRepository.insert(data);
  }

  async update(data: UpdateQuestDto): Promise<UpdateResult> {
    await this.findOne(data.id);
    return this.questsRepository.update(data.id, data);
  }

  async delete(id: string): Promise<UpdateResult> {
    await this.findOne(id);
    return this.questsRepository.softDelete(id);
  }
}
