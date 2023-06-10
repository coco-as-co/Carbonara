import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/domains/users/users.module';
import { BoxeIdeasController } from './boxeIdeas.controller';
import { BoxeIdeas } from './boxeIdeas.entity';
import { BoxeIdeasService } from './boxeIdeas.service';

@Module({
  imports: [TypeOrmModule.forFeature([BoxeIdeas]), UsersModule],
  controllers: [BoxeIdeasController],
  providers: [BoxeIdeasService],
  exports: [BoxeIdeasService],
})
export class BoxeIdeasModule {}
