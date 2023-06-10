import { Injectable } from '@nestjs/common';
import { CreateArticlesDto, UpdateArticlesDto } from './articles.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './articles.entity';
import { InsertResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private readonly ArticlesRepository: Repository<Article>,
  ) {}

  async findAll(): Promise<Article[]> {
    return this.ArticlesRepository.find({
      relations: {
        category: true,
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
        comments: true,
        category: true,
      },
    });
    if (!data) throw new Error("La relation n'existe pas");

    return data;
  }

  async create(data: CreateArticlesDto): Promise<InsertResult> {
    return this.ArticlesRepository.insert(data);
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
