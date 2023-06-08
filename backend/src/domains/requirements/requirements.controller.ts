import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { RequirementsService } from './requirements.service';
import { CreateRequirementDto, UpdateRequirementDto } from './requirements.dto';

@Controller('requirements')
export class RequirementsController {
  constructor(private readonly requirementsService: RequirementsService) {}

  @Get()
  public async getAllRequirements() {
    return await this.requirementsService.findAll();
  }

  @Get(':id')
  public async getOneRequirement(@Param('id', ParseUUIDPipe) id: string) {
    if (!id) throw new Error("La quête n'existe pas");
    return await this.requirementsService.findOne(id);
  }

  @Post()
  public async createRequirement(@Body() requirement: CreateRequirementDto) {
    return await this.requirementsService.create(requirement);
  }

  @Patch(':id')
  public async updateRequirement(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() requirement: UpdateRequirementDto,
  ) {
    if (!id) throw new Error("La quête n'existe pas");
    return await this.requirementsService.update(id, requirement);
  }

  @Delete(':id')
  public async deleteRequirement(@Param('id', ParseUUIDPipe) id: string) {
    if (!id) throw new Error('Quest id not provided');
    return await this.requirementsService.delete(id);
  }
}
