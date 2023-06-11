import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { CreateCommentsDto, UpdateCommentsDto } from './comments.dto';
import { Comment } from './comments.entity';
import { Article } from '../articles/articles.entity';
import { ArticlesService } from '../articles/articles.service';
import { User } from '../users/users.entity';
import { UsersService } from '../users/users.service';
@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly CommentsRepository: Repository<Comment>,
    @Inject(ArticlesService)
    private readonly articlesService: ArticlesService,
    @Inject(UsersService)
    private readonly usersService: UsersService,
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
    const article: Article = await this.articlesService.findOne(data.articleId);
    const user: User = await this.usersService.findOne(data.userId);
    return this.CommentsRepository.insert(
      this.CommentsRepository.create({ ...data, article, user }),
    );
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
