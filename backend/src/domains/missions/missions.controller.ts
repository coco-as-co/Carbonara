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
import { MissionsService } from './missions.service';
import { CreateMissionsDto, UpdateMissionsDto } from './missions.dto';

@Controller('missions')
export class MissionsController {
  constructor(private readonly missionsService: MissionsService) {}

  @Get()
  public async getAllMissions() {
    return await this.missionsService.findAll();
  }

  @Get(':id')
  public async getOneMission(@Param('id', ParseUUIDPipe) id: string) {
    return await this.missionsService.findOne(id);
  }

  @Post()
  public async createMission(@Body() missions: CreateMissionsDto) {
    return await this.missionsService.create(missions);
  }

  @Patch(':id')
  public async updateMission(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() missions: UpdateMissionsDto,
  ) {
    return await this.missionsService.update(id, missions);
  }

  @Delete(':id')
  public async deleteMission(@Param('id', ParseUUIDPipe) id: string) {
    return await this.missionsService.delete(id);
  }
}
