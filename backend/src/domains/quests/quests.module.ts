import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestsController } from './quests.controller';
import { Quest } from './quests.entity';
import { QuestsService } from './quests.service';

@Module({
  imports: [TypeOrmModule.forFeature([Quest])],
  controllers: [QuestsController],
  providers: [QuestsService],
  exports: [QuestsService],
})
export class QuestsModule {}
