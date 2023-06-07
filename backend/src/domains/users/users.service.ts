import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDto } from 'src/domains/users/users.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { RoleUser, User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @Inject(REQUEST) private request: Request,
  ) {}

  findAll(): Promise<User[]> {
    const user = this.request['user'] as User;

    if (user.role === RoleUser.ADMIN)
      return this.usersRepository.find({
        where: { deletedAt: null },
      });

    if (user.role === RoleUser.CLIENT) {
      //TODO
      /*  const missions = await this.missionsRepository.find({
        where: { clientId: user.id, deletedAt: null },
      });
      return missions.map((mission) => mission.consultant); */
    }

    if (user.role === RoleUser.CONSULTANT) {
      //TODO
      /*   const missions = await this.missionsRepository.find({
        where: { consultantId: user.id, deletedAt: null },
      });
      return missions.map((mission) => mission.client); */
    }

    /*  if (user.role === RoleUser.CONSULTANT)
      return .createQueryBuilder('user')
      .leftJoinAndSelect('user.clientMissions', 'mission')
      .where('mission.clientId = :clientId', { clientId: user.id })
      .andWhere('mission.deletedAt IS NULL')
      .getMany(); */
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
