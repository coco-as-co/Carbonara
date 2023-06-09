import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { CreateSkillDto, UpdateSkillDto } from './skills.dto';
import { Skill } from './skills.entity';

@Injectable()
export class SkillsService {
  constructor(
    @InjectRepository(Skill)
    private readonly skillsRepository: Repository<Skill>,
  ) {}

  async findAll(): Promise<Skill[]> {
    return this.skillsRepository.find();
  }

  async findOne(id: string): Promise<Skill> {
    const data = await this.skillsRepository.findOne({
      where: {
        id,
        deletedAt: null,
      },
      relations: ['quests'],
    });
    if (!data) throw new Error("La compétence n'existe pas");

    return data;
  }

  async create(data: CreateSkillDto): Promise<InsertResult> {
    return this.skillsRepository.insert(data);
  }

  async update(id: string, data: UpdateSkillDto): Promise<UpdateResult> {
    await this.findOne(id);
    return this.skillsRepository.update(id, data);
  }

  async delete(id: string): Promise<DeleteResult> {
    await this.findOne(id);
    return this.skillsRepository.softDelete(id);
  }
}
