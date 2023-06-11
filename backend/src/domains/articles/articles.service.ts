import { Inject, Injectable } from '@nestjs/common';
import { CreateArticlesDto, UpdateArticlesDto } from './articles.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './articles.entity';
import { InsertResult, Repository, UpdateResult } from 'typeorm';
import { REQUEST } from '@nestjs/core';
import { UsersService } from '../users/users.service';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private readonly ArticlesRepository: Repository<Article>,
    @Inject(UsersService)
    private readonly usersService: UsersService,
    @Inject(REQUEST) private request: Request,
  ) { }

  async findAll(): Promise<Article[]> {
    return this.ArticlesRepository.find({
      relations: {
        category: true,
        user: true
      },
    });
  }

  async findOne(id: string): Promise<Article> {
    const data = await this.ArticlesRepository.findOne({
      where: {
        id,
        deletedAt: null,
      },
      relations: {
        comments: {
          user: true,
        },
        category: true,
        user: true
      },
    });
    if (!data) throw new Error("La relation n'existe pas");

    return data;
  }

  async create(data: CreateArticlesDto): Promise<InsertResult> {
    const user = await this.usersService.findOne(this.request['user'].id);
    return this.ArticlesRepository.insert({ ...data, user });
  }

  async update(id: string, data: UpdateArticlesDto): Promise<UpdateResult> {
    await this.findOne(id);
    return this.ArticlesRepository.update(id, data);
  }

  async delete(id: string): Promise<UpdateResult> {
    await this.findOne(id);
    return this.ArticlesRepository.softDelete(id);
  }
}
