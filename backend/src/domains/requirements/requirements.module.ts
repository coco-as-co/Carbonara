import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Requirement } from './requirements.entity';
import { RequirementsService } from './requirements.service';
import { RequirementsController } from './requirements.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Requirement])],
  controllers: [RequirementsController],
  providers: [RequirementsService],
  exports: [RequirementsService],
})
export class RequirementsModule {}
