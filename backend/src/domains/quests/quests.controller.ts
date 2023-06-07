import { Body, Controller, Delete, Get, Patch } from '@nestjs/common';
import { QuestsService } from './quests.service';
import { Post } from '@nestjs/common';
import { CreateQuestDto, UpdateQuestDto } from './quests.dto';

@Controller('quests')
export class QuestsController {
  constructor(private readonly questsService: QuestsService) {}

  @Get()
  public index() {
    return 'Hello World to QuestsController!';
  }

  @Get('all')
  public async getAllQuests() {
    return await this.questsService.findAll();
  }

  @Get('one')
  public async getOneQuest(@Body() quests: { id: string }) {
    if (!quests.id) throw new Error("La quête n'existe pas");
    return await this.questsService.findOne(quests.id);
  }

  @Post('create')
  public async createQuest(@Body() quests: CreateQuestDto) {
    return await this.questsService.create(quests);
  }

  @Patch('update')
  public async updateQuest(@Body() quests: UpdateQuestDto) {
    if (!quests.id) throw new Error("La quête n'existe pas");
    return await this.questsService.update(quests);
  }

  @Delete('delete')
  public async deleteQuest(@Body() quests: { id: string }) {
    if (!quests.id) throw new Error('Quest id not provided');
    return await this.questsService.delete(quests.id);
  }
}
