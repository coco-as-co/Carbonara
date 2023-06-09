import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Suggestion } from './suggestions.entity';
import { CreateSuggestionDto, UpdateSuggestionDto } from './suggestions.dto';

@Injectable()
export class SuggestionsService {
  constructor(
    @InjectRepository(Suggestion)
    private readonly suggestionsRepository: Repository<Suggestion>,
  ) {}

  async findAll(): Promise<Suggestion[]> {
    return this.suggestionsRepository.find();
  }

  async findOne(id: string): Promise<Suggestion> {
    const data = await this.suggestionsRepository.findOne({
      where: {
        id,
        deletedAt: null,
      },
    });
    if (!data) throw new Error("La suggestion n'existe pas");

    return data;
  }

  async create(data: CreateSuggestionDto): Promise<InsertResult> {
    return this.suggestionsRepository.insert(data);
  }

  async update(id: string, data: UpdateSuggestionDto): Promise<UpdateResult> {
    await this.findOne(id);
    return this.suggestionsRepository.update(id, data);
  }

  async delete(id: string): Promise<DeleteResult> {
    await this.findOne(id);
    return this.suggestionsRepository.softDelete(id);
  }
}
