import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoxeIdeas } from './boxeIdeas.entity';
import { BoxeIdeasController } from './boxeIdeas.controller';
import { BoxeIdeasService } from './boxeIdeas.service';

@Module({
  imports: [TypeOrmModule.forFeature([BoxeIdeas])],
  controllers: [BoxeIdeasController],
  providers: [BoxeIdeasService],
  exports: [BoxeIdeasService],
})
export class BoxeIdeasModule {}
