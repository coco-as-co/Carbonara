import { InjectRepository } from '@nestjs/typeorm';
import { Vote } from './votes.entity';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Inject } from '@nestjs/common';
import { ChoicesService } from '../choices/choices.service';
import { UsersService } from '../users/users.service';
import { CreateVotesDto, UpdateVotesDto } from './votes.dto';
import { Choice } from '../choices/choices.entity';
import { User } from '../users/users.entity';

export class VotesService {
  constructor(
    @InjectRepository(Vote)
    private readonly votesRepository: Repository<Vote>,
    @Inject(ChoicesService)
    private readonly choicesService: ChoicesService,
    @Inject(UsersService)
    private readonly usersService: UsersService,
  ) {}

  async findAll(): Promise<Vote[]> {
    return this.votesRepository.find();
  }

  async findOne(id: string): Promise<Vote> {
    const data = await this.votesRepository.findOne({
      where: {
        id,
        deletedAt: null,
      },
    });
    if (!data) throw new Error("La quête n'existe pas");

    return data;
  }

  async create(data: CreateVotesDto): Promise<InsertResult> {
    const choice: Choice = await this.choicesService.findOne(data.choiceId);
    const user: User = await this.usersService.findOne(data.userId);
    console.log(user.id);
    return this.votesRepository.insert(
      this.votesRepository.create({ ...data, choice, user }),
    );
  }

  async update(id: string, data: UpdateVotesDto): Promise<UpdateResult> {
    await this.findOne(id);
    return this.votesRepository.update(id, data);
  }

  async remove(id: string): Promise<DeleteResult> {
    await this.findOne(id);
    return this.votesRepository.softDelete(id);
  }
}
