import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { CreateCommentsDto, UpdateCommentsDto } from './comments.dto';
import { Comment } from './comments.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly CommentsRepository: Repository<Comment>,
  ) {}

  async findAll(): Promise<Comment[]> {
    return this.CommentsRepository.find();
  }

  async findOne(id: string): Promise<Comment> {
    const data = await this.CommentsRepository.findOne({
      where: {
        id,
        deletedAt: null,
      },
    });
    if (!data) throw new Error("La quête n'existe pas");

    return data;
  }

  async create(data: CreateCommentsDto): Promise<InsertResult> {
    return this.CommentsRepository.insert(data);
  }

  async update(id: string, data: UpdateCommentsDto): Promise<UpdateResult> {
    await this.findOne(id);
    return this.CommentsRepository.update(id, data);
  }

  async delete(id: string): Promise<DeleteResult> {
    await this.findOne(id);
    return this.CommentsRepository.softDelete(id);
  }
}
