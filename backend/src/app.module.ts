import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseConfig } from './config/typeorm.config';
import { AuthModule } from './domains/auth/auth.module';
import { UsersModule } from './domains/users/users.module';
import { QuestsModule } from './domains/quests/quests.module';
import { BoxeIdeasModule } from './domains/boxe_ideas/boxeIdeas.module';
import { ArticlesModule } from './domains/articles/articles.module';
import { SkillsModule } from './domains/skills/skills.module';
import { UserQuestsModule } from './domains/user_quests/userQuest.module';
@Module({
  imports: [
    DatabaseConfig,
    UsersModule,
    AuthModule,
    QuestsModule,
    ArticlesModule,
    BoxeIdeasModule,
    SkillsModule,
    UserQuestsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
