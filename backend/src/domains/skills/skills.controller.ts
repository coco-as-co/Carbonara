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
import { SkillsService } from './skills.service';
import { CreateSkillDto, UpdateSkillDto } from './skills.dto';

@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Get()
  public index() {
    return 'Hello World to SkillsController!';
  }

  @Get('all')
  public async getAllSkills() {
    return await this.skillsService.findAll();
  }

  @Get(':id')
  public async getOneSkill(@Param('id', ParseUUIDPipe) id: string) {
    if (!id) throw new Error("La compétence n'existe pas");
    return await this.skillsService.findOne(id);
  }

  @Post()
  public async createSkill(@Body() skills: CreateSkillDto) {
    return await this.skillsService.create(skills);
  }

  @Patch(':id')
  public async updateSkill(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() skills: UpdateSkillDto,
  ) {
    if (!id) throw new Error("La compétence n'existe pas");
    return await this.skillsService.update(id, skills);
  }

  @Delete(':id')
  public async deleteSkill(@Param('id', ParseUUIDPipe) id: string) {
    if (!id) throw new Error('Skill id not provided');
    return await this.skillsService.delete(id);
  }
}
