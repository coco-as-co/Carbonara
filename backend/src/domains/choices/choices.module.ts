import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Choice } from './choices.entity';
import { ChoicesController } from './choices.controller';
import { ChoicesService } from './choices.service';
import { Survey } from '../surveys/surveys.entity';
import { SurveysService } from '../surveys/surveys.service';

@Module({
  imports: [TypeOrmModule.forFeature([Choice, Survey])],
  controllers: [ChoicesController],
  providers: [ChoicesService, SurveysService],
  exports: [ChoicesService],
})
export class ChoicesModule {}
