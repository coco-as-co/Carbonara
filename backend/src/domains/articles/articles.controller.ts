import { CreateArticlesDto, UpdateArticlesDto } from './articles.dto';
import { ArticlesService } from './articles.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  public async getAllArticle() {
    return await this.articlesService.findAll();
  }

  @Get(':id')
  public async getOneArticle(@Param('id', ParseUUIDPipe) id: string) {
    return await this.articlesService.findOne(id);
  }

  @Post()
  public async createArticle(@Body() quests: CreateArticlesDto) {
    return await this.articlesService.create(quests);
  }

  @Patch(':id')
  public async updateArticles(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() quests: UpdateArticlesDto,
  ) {
    return await this.articlesService.update(id, quests);
  }

  @Delete(':id')
  public async deleteArticle(@Param('id', ParseUUIDPipe) id: string) {
    return await this.articlesService.delete(id);
  }
}
