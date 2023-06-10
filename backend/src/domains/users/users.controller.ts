import {
  Controller,
  Delete,
  Get,
  Inject,
  Injectable,
  Param,
  Patch,
  Scope,
  UseGuards,
} from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { JwtAuthGuard } from 'src/domains/auth/jwt-auth.guard';
import { UpdateUserDtoWrapper } from 'src/domains/users/users.dto';
import { UsersService } from './users.service';
@Injectable({ scope: Scope.REQUEST })
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    @Inject(REQUEST) private request: Request,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  public async me() {
    return await this.usersService.findOne(this.request['user'].id);
  }

  @Get()
  public findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return await this.usersService.findOne(id);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return await this.usersService.remove(id);
  }

  @Patch(':id')
  public async update(@Param('data') data: UpdateUserDtoWrapper) {
    return await this.usersService.update(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  public profile() {
    console.log('users controller profile');
    console.log(this.request['user']);

    return this.request['user'];
  }
}
