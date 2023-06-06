import {
  Controller,
  Get,
  Inject,
  Injectable,
  Scope,
  UseGuards,
} from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { JwtAuthGuard } from 'src/domains/auth/jwt-auth.guard';
import { UsersService } from './users.service';
@Injectable({ scope: Scope.REQUEST })
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    @Inject(REQUEST) private request: Request,
  ) {}

  @Get()
  public index() {
    return 'Hello World to UsersController!';
  }

  @Get('all')
  public async getAllUsers() {
    return await this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  public profile() {
    console.log('users controller profile');
    console.log(this.request['user']);

    return this.request['user'];
  }
}
