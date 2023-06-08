import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
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

  @Get('one')
  public async getOneBoxeIdeas(@Body() boxeIdeas: { id: string }) {
    if (!boxeIdeas.id) throw new Error("La boite à idée n'existe pas");
    return await this.boxeIdeasService.findOne(boxeIdeas.id);
  }

  @Post('create')
  public async createBoxeIdeas(@Body() boxeIdeas: CreateBoxeIdeaDto) {
    return await this.boxeIdeasService.create(boxeIdeas);
  }

  @Patch('update')
  public async updateBoxeIdeas(@Body() boxeIdeas: UpdateBoxeIdeaDto) {
    if (!boxeIdeas.id) throw new Error("La boite à idée n'existe pas");
    return await this.boxeIdeasService.update(boxeIdeas);
  }

  @Delete('delete')
  public async deleteBoxeIdeas(@Body() boxeIdeas: { id: string }) {
    if (!boxeIdeas.id) throw new Error('BoxeIdeas id not provided');
    return await this.boxeIdeasService.delete(boxeIdeas.id);
  }
}
