import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Requirement } from './requirements.entity';
import { CreateRequirementDto, UpdateRequirementDto } from './requirements.dto';

@Injectable()
export class RequirementsService {
  constructor(
    @InjectRepository(Requirement)
    private readonly requirementsRepository: Repository<Requirement>,
  ) {}

  async findAll(): Promise<Requirement[]> {
    return this.requirementsRepository.find();
  }

  async findOne(id: string): Promise<Requirement> {
    const data = await this.requirementsRepository.findOne({
      where: {
        id,
        deletedAt: null,
      },
    });
    if (!data) throw new Error("La quête n'existe pas");

    return data;
  }

  async create(data: CreateRequirementDto): Promise<InsertResult> {
    return this.requirementsRepository.insert(data);
  }

  async update(id: string, data: UpdateRequirementDto): Promise<UpdateResult> {
    await this.findOne(id);
    return this.requirementsRepository.update(id, data);
  }

  async delete(id: string): Promise<DeleteResult> {
    await this.findOne(id);
    return this.requirementsRepository.softDelete(id);
  }
}
