import {
  Body,
  Controller,
  Post,
  Delete,
  Get,
  Patch,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { UserQuestService } from './userQuest.service';
import { CreateUserQuestDto, UpdateUserQuestDto } from './userQuest.dto';

@Controller('userQuest')
export class UserQuestController {
  constructor(private readonly userQuestService: UserQuestService) {}

  @Get()
  public index() {
    return 'Hello World to UserQuestController!';
  }

  @Get('all')
  public async getAllUserQuests() {
    return await this.userQuestService.findAll();
  }

  @Get(':id')
  public async getOneUserQuest(@Param('id', ParseUUIDPipe) id: string) {
    if (!id) throw new Error("La quête n'existe pas");
    return await this.userQuestService.findOne(id);
  }

  @Post('create')
  public async createUserQuest(@Body() userQuests: CreateUserQuestDto) {
    return await this.userQuestService.create(userQuests);
  }

  @Patch(':id')
  public async updateUserQuest(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() userQuests: UpdateUserQuestDto,
  ) {
    if (!id) throw new Error("La quête n'existe pas");
    return await this.userQuestService.update(id, userQuests);
  }

  @Delete(':id')
  public async deleteUserQuest(@Param('id', ParseUUIDPipe) id: string) {
    if (!id) throw new Error('Quest id not provided');
    return await this.userQuestService.delete(id);
  }
}
