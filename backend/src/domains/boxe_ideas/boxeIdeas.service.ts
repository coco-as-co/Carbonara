import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { BoxeIdeas } from './boxeIdeas.entity';
import { Param, ParseUUIDPipe } from '@nestjs/common';
import { CreateBoxeIdeaDto, UpdateBoxeIdeaDto } from './boxeIdeas.dto';

@Injectable()
export class BoxeIdeasService {
  constructor(
    @InjectRepository(BoxeIdeas)
    private readonly boxeIdeasRepository: Repository<BoxeIdeas>,
  ) {}

  async findAll(): Promise<BoxeIdeas[]> {
    return this.boxeIdeasRepository.find();
  }

  async findOne(@Param('id', ParseUUIDPipe) id: string): Promise<BoxeIdeas> {
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
    return this.boxeIdeasRepository.insert(data);
  }

  async update(data: UpdateBoxeIdeaDto): Promise<UpdateResult> {
    await this.findOne(data.id);
    return this.boxeIdeasRepository.update(data.id, data);
  }

  async delete(@Param('id', ParseUUIDPipe) id: string): Promise<DeleteResult> {
    await this.findOne(id);
    return this.boxeIdeasRepository.softDelete(id);
  }
}
