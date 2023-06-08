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
import { BoxeIdeasService } from './boxeIdeas.service';
import { CreateBoxeIdeaDto, UpdateBoxeIdeaDto } from './boxeIdeas.dto';

@Controller('boxeIdeas')
export class BoxeIdeasController {
  constructor(private readonly boxeIdeasService: BoxeIdeasService) {}

  @Get()
  public index() {
    return 'Hello World to BoxeIdeasController!';
  }

  @Get('all')
  public async getAllBoxeIdeas() {
    return await this.boxeIdeasService.findAll();
  }

  @Get(':id')
  public async getOneBoxeIdeas(@Param('id', ParseUUIDPipe) id: string) {
    if (!id) throw new Error("La boite à idée n'existe pas");
    return await this.boxeIdeasService.findOne(id);
  }

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
