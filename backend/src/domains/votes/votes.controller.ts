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
import { VotesService } from './votes.service';
import { CreateVotesDto, UpdateVotesDto } from './votes.dto';

@Controller('votes')
export class VotesController {
  constructor(private readonly votesService: VotesService) {}

  @Get()
  public async getAllVotes() {
    return await this.votesService.findAll();
  }

  @Get(':id')
  public async getOneVote(@Param('id', ParseUUIDPipe) id: string) {
    if (!id) throw new Error("Le sondage n'existe pas");
    return await this.votesService.findOne(id);
  }

  @Post()
  public async createVote(@Body() quests: CreateVotesDto) {
    return await this.votesService.create(quests);
  }

  @Patch(':id')
  public async updateVote(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() quests: UpdateVotesDto,
  ) {
    if (!id) throw new Error("Le sondage n'existe pas");
    return await this.votesService.update(id, quests);
  }

  @Delete(':id')
  public async deleteVote(@Param('id', ParseUUIDPipe) id: string) {
    if (!id) throw new Error("Le sondage n'existe pas ");
    return await this.votesService.remove(id);
  }
}
