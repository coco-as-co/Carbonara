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
import { ChoicesService } from './choices.service';
import { CreateChoicesDto, UpdateChoicesDto } from './choices.dto';

@Controller('choices')
export class ChoicesController {
  constructor(private readonly choicesService: ChoicesService) {}

  @Get()
  public async getAllChoices() {
    return await this.choicesService.findAll();
  }

  @Get(':id')
  public async getOneChoice(@Param('id', ParseUUIDPipe) id: string) {
    if (!id) throw new Error("Le choix n'existe pas");
    return await this.choicesService.findOne(id);
  }

  @Post()
  public async creatChoice(@Body() quests: CreateChoicesDto) {
    return await this.choicesService.create(quests);
  }

  @Patch(':id')
  public async updateChoice(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() quests: UpdateChoicesDto,
  ) {
    if (!id) throw new Error("Le choix n'existe pas");
    return await this.choicesService.update(id, quests);
  }

  @Delete(':id')
  public async deleteChoice(@Param('id', ParseUUIDPipe) id: string) {
    if (!id) throw new Error("Le choix n'existe pas ");
    return await this.choicesService.remove(id);
  }
}
