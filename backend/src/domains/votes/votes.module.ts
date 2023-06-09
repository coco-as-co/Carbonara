import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vote } from './votes.entity';
import { VotesController } from './votes.controller';
import { VotesService } from './votes.service';
import { Choice } from '../choices/choices.entity';
import { User } from '../users/users.entity';
import { ChoicesService } from '../choices/choices.service';
import { UsersService } from '../users/users.service';
import { SurveysService } from '../surveys/surveys.service';
import { Survey } from '../surveys/surveys.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vote, Choice, User, Survey])],
  controllers: [VotesController],
  providers: [VotesService, ChoicesService, UsersService, SurveysService],
  exports: [VotesService],
})
export class VotesModule {}
