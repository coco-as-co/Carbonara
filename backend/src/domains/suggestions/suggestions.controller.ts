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
import { SuggestionsService } from './suggestions.service';
import { CreateSuggestionDto, UpdateSuggestionDto } from './suggestions.dto';

@Controller('suggestions')
export class SuggestionsController {
  constructor(private readonly suggestionsService: SuggestionsService) {}

  @Get()
  public async getAllSuggestions() {
    return await this.suggestionsService.findAll();
  }

  @Get(':id')
  public async getOneSuggestion(@Param('id', ParseUUIDPipe) id: string) {
    if (!id) throw new Error("La suggestion n'existe pas");
    return await this.suggestionsService.findOne(id);
  }

  @Post()
  public async createSuggestion(@Body() suggestions: CreateSuggestionDto) {
    return await this.suggestionsService.create(suggestions);
  }

  @Patch(':id')
  public async updateSuggestion(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() suggestions: UpdateSuggestionDto,
  ) {
    if (!id) throw new Error("La suggestion n'existe pas");
    return await this.suggestionsService.update(id, suggestions);
  }

  @Delete(':id')
  public async deleteSuggestion(@Param('id', ParseUUIDPipe) id: string) {
    if (!id) throw new Error('Suggestion id not provided');
    return await this.suggestionsService.delete(id);
  }
}
