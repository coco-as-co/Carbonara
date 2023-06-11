import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Choice } from 'src/domains/choices/choices.entity';
import { ChoicesService } from 'src/domains/choices/choices.service';
import { SurveysController } from './surveys.controller';
import { Survey } from './surveys.entity';
import { SurveysService } from './surveys.service';

@Module({
  imports: [TypeOrmModule.forFeature([Survey, Choice])],
  controllers: [SurveysController],
  providers: [SurveysService, ChoicesService],
  exports: [SurveysService],
})
export class SurveysModule {}
//
