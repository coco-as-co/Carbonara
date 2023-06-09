import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import { Badge } from './badges.entity';
import { CreateBadgeDto, UpdateBadgeDto } from './badges.dto';

@Injectable()
export class BadgesService {
  constructor(
    @InjectRepository(Badge)
    private readonly badgesRepository: Repository<Badge>,
  ) {}

  async findAll(): Promise<Badge[]> {
    return this.badgesRepository.find();
  }

  async findOne(id: string): Promise<Badge> {
    const data = await this.badgesRepository.findOne({
      where: {
        id,
        deletedAt: null,
      },
    });
    if (!data) throw new Error("Le badge n'existe pas");

    return data;
  }

  async create(data: CreateBadgeDto): Promise<InsertResult> {
    return this.badgesRepository.insert(data);
  }

  async update(id: string, data: UpdateBadgeDto): Promise<UpdateResult> {
    await this.findOne(id);
    return this.badgesRepository.update(id, data);
  }

  async delete(id: string): Promise<DeleteResult> {
    await this.findOne(id);
    return this.badgesRepository.softDelete(id);
  }
}
