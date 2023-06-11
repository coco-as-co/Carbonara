import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Survey } from 'src/domains/surveys/surveys.entity';
import { SurveysService } from 'src/domains/surveys/surveys.service';
import { ChoicesController } from './choices.controller';
import { Choice } from './choices.entity';
import { ChoicesService } from './choices.service';

@Module({
  imports: [TypeOrmModule.forFeature([Choice, Survey])],
  controllers: [ChoicesController],
  providers: [ChoicesService, SurveysService],
  exports: [ChoicesService],
})
export class ChoicesModule {}
