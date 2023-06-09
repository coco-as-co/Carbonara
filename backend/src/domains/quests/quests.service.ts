import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { CreateQuestDto, UpdateQuestDto } from './quests.dto';
import { Quest } from './quests.entity';

@Injectable()
export class QuestsService {
  constructor(
    @InjectRepository(Quest)
    private readonly questsRepository: Repository<Quest>,
  ) {}

  async findAll(): Promise<Quest[]> {
    return await this.questsRepository.find({
      where: {
        deletedAt: null,
      },
      relations: {
        skill: true,
        userQuest: true,
        requirements: true,
        suggestions: true,
      },
    });
  }

  async findAllBySkill(id: string): Promise<Quest[]> {
    return await this.questsRepository.find({
      where: {
        deletedAt: null,
        skill: {
          id,
        },
      },
      relations: {
        skill: true,
        userQuest: true,
        requirements: true,
        suggestions: true,
      },
    });
  }

  async findOne(id: string): Promise<Quest> {
    const data = await this.questsRepository.findOne({
      where: {
        id,
        deletedAt: null,
      },
      relations: {
        skill: true,
        userQuest: true,
        requirements: true,
        suggestions: true,
      },
    });
    if (!data) throw new Error("La quête n'existe pas");

    return data;
  }

  async create(data: CreateQuestDto): Promise<InsertResult> {
    return this.questsRepository.insert(data);
  }

  async update(id: string, data: UpdateQuestDto): Promise<UpdateResult> {
    await this.findOne(id);
    return this.questsRepository.update(id, data);
  }

  async delete(id: string): Promise<DeleteResult> {
    await this.findOne(id);
    return this.questsRepository.softDelete(id);
  }
}
