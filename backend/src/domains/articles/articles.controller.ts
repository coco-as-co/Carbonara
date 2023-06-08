import { CreateArticlesDto, UpdateArticlesDto } from './articles.dto';
import { ArticlesService } from './articles.service';
import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  public index() {
    return 'Hello World to QuestsController!';
  }

  @Get('all')
  public async getAllQuests() {
    return await this.articlesService.findAll();
  }

  @Get('one')
  public async getOneQuest(@Body() quests: { id: string }) {
    if (!quests.id) throw new Error("La quête n'existe pas");
    return await this.articlesService.findOne(quests.id);
  }

  @Post('create')
  public async createQuest(@Body() quests: CreateArticlesDto) {
    return await this.articlesService.create(quests);
  }

  @Patch('update')
  public async updateQuest(@Body() quests: UpdateArticlesDto) {
    if (!quests.id) throw new Error("La quête n'existe pas");
    return await this.articlesService.update(quests);
  }

  @Delete('delete')
  public async deleteQuest(@Body() quests: { id: string }) {
    if (!quests.id) throw new Error('Quest id not provided');
    return await this.articlesService.delete(quests.id);
  }
}
