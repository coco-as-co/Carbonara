import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserQuestController } from './userQuest.controller';
import { UserQuest } from './userQuest.entity';
import { UserQuestService } from './userQuest.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserQuest])],
  controllers: [UserQuestController],
  providers: [UserQuestService],
  exports: [UserQuestService],
})
export class UserQuestsModule {}
