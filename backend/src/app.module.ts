import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseConfig } from './config/typeorm.config';
import { AuthModule } from './domains/auth/auth.module';
import { UsersModule } from './domains/users/users.module';
import { QuestsModule } from './domains/quests/quests.module';
import { BoxeIdeasModule } from './domains/boxe_ideas/boxeIdeas.module';
import { ArticlesModule } from './domains/articles/articles.module';
import { CommentsModule } from './domains/comments/comments.module';
import { SkillsModule } from './domains/skills/skills.module';
import { UserQuestsModule } from './domains/user_quests/userQuest.module';
import { RequirementsModule } from './domains/requirements/requirements.module';
import { QuestionsModule } from './domains/questions/questions.module';
import { CategoriesModule } from './domains/categories/categories.module';
@Module({
  imports: [
    DatabaseConfig,
    UsersModule,
    AuthModule,
    QuestsModule,
    ArticlesModule,
    BoxeIdeasModule,
    CommentsModule,
    SkillsModule,
    UserQuestsModule,
    RequirementsModule,
    QuestionsModule,
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
