import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/domains/auth/jwt-auth.guard';
import { CreateBoxeIdeaDto, UpdateBoxeIdeaDto } from './boxeIdeas.dto';
import { BoxeIdeasService } from './boxeIdeas.service';

@Controller('boxeIdeas')
export class BoxeIdeasController {
  constructor(private readonly boxeIdeasService: BoxeIdeasService) {}

  @Get()
  public async getAllBoxeIdeas() {
    return await this.boxeIdeasService.findAll();
  }

  @Get(':id')
  public async getOneBoxeIdeas(@Param('id', ParseUUIDPipe) id: string) {
    if (!id) throw new Error("La boite à idée n'existe pas");
    return await this.boxeIdeasService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  public async createBoxeIdeas(@Body() boxeIdeas: CreateBoxeIdeaDto) {
    return await this.boxeIdeasService.create(boxeIdeas);
  }

  @Patch(':id')
  public async updateBoxeIdeas(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() boxeIdeas: UpdateBoxeIdeaDto,
  ) {
    if (!id) throw new Error("La boite à idée n'existe pas");
    return await this.boxeIdeasService.update(id, boxeIdeas);
  }

  @Delete(':id')
  public async deleteBoxeIdeas(@Param('id', ParseUUIDPipe) id: string) {
    if (!id) throw new Error('BoxeIdeas id not provided');
    return await this.boxeIdeasService.delete(id);
  }
}
