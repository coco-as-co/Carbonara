import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository, UpdateResult } from 'typeorm';
import { UserQuest } from './userQuest.entity';
import { CreateUserQuestDto, UpdateUserQuestDto } from './userQuest.dto';

@Injectable()
export class UserQuestService {
  constructor(
    @InjectRepository(UserQuest)
    private readonly userQuestRepository: Repository<UserQuest>,
  ) {}

  async findAll(): Promise<UserQuest[]> {
    return this.userQuestRepository.find();
  }

  async findOne(id: string): Promise<UserQuest> {
    const data = await this.userQuestRepository.findOne({
      where: {
        id,
        deletedAt: null,
      },
    });
    if (!data) throw new Error("La quête n'existe pas");

    return data;
  }

  async create(data: CreateUserQuestDto): Promise<InsertResult> {
    return this.userQuestRepository.insert(data);
  }

  async update(id: string, data: UpdateUserQuestDto): Promise<UpdateResult> {
    await this.findOne(id);
    return this.userQuestRepository.update(id, data);
  }

  async delete(id: string): Promise<UpdateResult> {
    await this.findOne(id);
    return this.userQuestRepository.softDelete(id);
  }
}
