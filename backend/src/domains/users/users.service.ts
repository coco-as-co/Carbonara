import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDto } from 'src/domains/users/users.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async find(id: string): Promise<User> {
    const data = await this.usersRepository.findOneBy({ id });
    if (!data) throw new NotFoundException();
    return data;
  }
  async remove(id: string): Promise<DeleteResult> {
    await this.find(id);
    return this.usersRepository.delete(id);
  }

  async update(id: string, data: UpdateUserDto): Promise<UpdateResult> {
    await this.find(id);
    return this.usersRepository.update(id, data);
  }
}
