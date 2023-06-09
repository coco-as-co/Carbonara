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
import { SurveysService } from './surveys.service';
import { CreateSurveysDto, UpdateSurveysDto } from './surveys.dto';

@Controller('surveys')
export class SurveysController {
  constructor(private readonly surveysService: SurveysService) {}

  @Get()
  public async getAllSurveys() {
    return await this.surveysService.findAll();
  }

  @Get(':id')
  public async getOneSurvey(@Param('id', ParseUUIDPipe) id: string) {
    if (!id) throw new Error("Le sondage n'existe pas");
    return await this.surveysService.findOne(id);
  }

  @Post()
  public async createSurvey(@Body() quests: CreateSurveysDto) {
    return await this.surveysService.create(quests);
  }

  @Patch(':id')
  public async updateSurvey(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() quests: UpdateSurveysDto,
  ) {
    if (!id) throw new Error("Le sondage n'existe pas");
    return await this.surveysService.update(id, quests);
  }

  @Delete(':id')
  public async deleteSurvey(@Param('id', ParseUUIDPipe) id: string) {
    if (!id) throw new Error("Le sondage n'existe pas ");
    return await this.surveysService.remove(id);
  }
}
