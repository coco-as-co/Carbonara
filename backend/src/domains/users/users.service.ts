import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDtoWrapper } from 'src/domains/users/users.dto';
import { DeleteResult, Not, Repository, UpdateResult } from 'typeorm';
import { RoleUser, User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @Inject(REQUEST) private request: Request,
  ) {}

  async findAll(): Promise<User[]> {
    const user = this.request['user'] as User;

    switch (user.role) {
      case RoleUser.CLIENT:
        //TODO
        /*  const missions = await this.missionsRepository.find({
          where: { clientId: user.id, deletedAt: null },
        });
        return missions.map((mission) => mission.consultant); */
        break;
      case RoleUser.CONSULTANT:
        //TODO
        /*   const missions = await this.missionsRepository.find({
        where: { consultantId: user.id, deletedAt: null },
      });

      
      return missions.map((mission) => mission.client);
      
      */
        const clients = [];
        const users = await this.usersRepository.find({
          where: { role: Not(RoleUser.CLIENT), deletedAt: null },
        });

        return clients.concat(users);
      default:
        return this.usersRepository.find({
          where: { deletedAt: null },
        });
    }
  }

  async findOne(id: string): Promise<User> {
    const data = await this.usersRepository.findOneBy({ id });
    if (!data) throw new NotFoundException();

    switch (data.role) {
      case RoleUser.CLIENT:
      /* 
        await this.missionsRepository.findOne({
          where: { consultantId: data.id, deletedAt: null, clientId: this.request['user'].id },
        */
      case RoleUser.CONSULTANT:
        if (data.role === RoleUser.CLIENT) {
          /* 
            await this.missionsRepository.findOne({
              where: { consultantId: this.request['user'].id, deletedAt: null, clientId: data.id},
            */
        }
        break;
      default:
        return data;
    }
  }

  async remove(id: string): Promise<DeleteResult> {
    await this.findOne(id);

    if (this.request['user'].role !== RoleUser.ADMIN)
      throw new NotFoundException();

    return this.usersRepository.delete(id);
  }

  async update(data: UpdateUserDtoWrapper): Promise<UpdateResult> {
    const user = await this.findOne(data.id);

    if (user.role !== data.body.role && data.body.role !== RoleUser.ADMIN)
      throw new NotFoundException();

    if (
      this.request['user'].role !== RoleUser.ADMIN &&
      this.request['user'].id !== data.id
    )
      throw new NotFoundException();

    return this.usersRepository.update(data.id, data);
  }
}
