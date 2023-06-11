import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { CreateMissionsDto, UpdateMissionsDto } from './missions.dto';
import { Mission } from './missions.entity';

@Injectable()
export class MissionsService {
  constructor(
    @InjectRepository(Mission)
    private readonly missionsRepository: Repository<Mission>,
  ) {}

  async findAll(): Promise<Mission[]> {
    return this.missionsRepository.find();
  }

  async findOne(id: string): Promise<Mission> {
    const data = await this.missionsRepository.findOne({
      where: {
        id,
        deletedAt: null,
      },
    });
    if (!data) throw new Error("La mission n'existe pas ");

    return data;
  }

  async create(data: CreateMissionsDto): Promise<InsertResult> {
    return this.missionsRepository.insert(data);
  }

  async update(id: string, data: UpdateMissionsDto): Promise<UpdateResult> {
    await this.findOne(id);
    return this.missionsRepository.update(id, data);
  }

  async delete(id: string): Promise<DeleteResult> {
    await this.findOne(id);
    return this.missionsRepository.softDelete(id);
  }
}
