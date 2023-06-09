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
import { CreateQuestDto, UpdateQuestDto } from './quests.dto';
import { QuestsService } from './quests.service';

@Controller('quests')
export class QuestsController {
  constructor(private readonly questsService: QuestsService) {}

  @Get()
  public async getAllQuests() {
    return await this.questsService.findAll();
  }

  @Get('bySkill/:id')
  public async getAllQuestsBySkill(@Param('id', ParseUUIDPipe) id: string) {
    return await this.questsService.findAllBySkill(id);
  }

  @Get(':id')
  public async getOneQuest(@Param('id', ParseUUIDPipe) id: string) {
    if (!id) throw new Error("La quête n'existe pas");
    return await this.questsService.findOne(id);
  }

  @Post()
  public async createQuest(@Body() quests: CreateQuestDto) {
    return await this.questsService.create(quests);
  }

  @Patch(':id')
  public async updateQuest(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() quests: UpdateQuestDto,
  ) {
    if (!id) throw new Error("La quête n'existe pas");
    return await this.questsService.update(id, quests);
  }

  @Delete(':id')
  public async deleteQuest(@Param('id', ParseUUIDPipe) id: string) {
    if (!id) throw new Error('Quest id not provided');
    return await this.questsService.delete(id);
  }
}
