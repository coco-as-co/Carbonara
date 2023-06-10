import { Inject, Injectable } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { UsersService } from '../users/users.service';
import { CreateBoxeIdeaDto, UpdateBoxeIdeaDto } from './boxeIdeas.dto';
import { BoxeIdeas } from './boxeIdeas.entity';

@Injectable()
export class BoxeIdeasService {
  constructor(
    @InjectRepository(BoxeIdeas)
    private readonly boxeIdeasRepository: Repository<BoxeIdeas>,
    @Inject(UsersService)
    private readonly usersService: UsersService,
    @Inject(REQUEST) private request: Request,
  ) {}

  async findAll(): Promise<BoxeIdeas[]> {
    return this.boxeIdeasRepository.find({
      where: {
        deletedAt: null,
      },
      relations: {
        user: true,
      },
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string): Promise<BoxeIdeas> {
    const data = await this.boxeIdeasRepository.findOne({
      where: {
        id,
        deletedAt: null,
      },
    });
    if (!data) throw new Error("La boite à idée n'existe pas");
    return data;
  }

  async create(data: CreateBoxeIdeaDto): Promise<InsertResult> {
    const user = await this.usersService.findOne(this.request['user'].id);
    await this.usersService.update({
      id: user.id,
      body: {
        experience: user.experience + 5,
      },
    });
    return this.boxeIdeasRepository.insert({ ...data, user });
  }

  async update(id: string, data: UpdateBoxeIdeaDto): Promise<UpdateResult> {
    await this.findOne(id);
    return this.boxeIdeasRepository.update(id, data);
  }

  async delete(id: string): Promise<DeleteResult> {
    await this.findOne(id);
    return this.boxeIdeasRepository.softDelete(id);
  }
}
