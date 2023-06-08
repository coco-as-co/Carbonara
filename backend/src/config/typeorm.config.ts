import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer } from 'src/domains/answers/answers.entity';
import { Article } from 'src/domains/articles/articles.entity';
import { Badge } from 'src/domains/badges/badges.entity';
import { BoxeIdeas } from 'src/domains/boxe_ideas/boxeIdeas.entity';
import { Category } from 'src/domains/categories/categories.entity';
import { Choice } from 'src/domains/choices/choices.entity';
import { Comment } from 'src/domains/comment/comment.entity';
import { Mission } from 'src/domains/missions/missions.entity';
import { Question } from 'src/domains/questions/questions.entity';
import { Quest } from 'src/domains/quests/quests.entity';
import { Requirement } from 'src/domains/requirements/requirements.entity';
import { Review } from 'src/domains/reviews/reviews.entity';
import { Skill } from 'src/domains/skills/skills.entity';
import { Suggestion } from 'src/domains/suggestions/suggestion.entity';
import { Survey } from 'src/domains/surveys/survey.entity';
import { UserQuest } from 'src/domains/user_quests/userQuest.entity';
import { User } from 'src/domains/users/users.entity';
import { Vote } from 'src/domains/votes/votes.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [
        Category,
        User,
        UserQuest,
        Mission,
        Choice,
        Review,
        Badge,
        Article,
        Quest,
        Skill,
        Survey,
        Vote,
        Comment,
        Requirement,
        Question,
        Answer,
        Suggestion,
        BoxeIdeas,
      ],
      synchronize: process.env.ENV !== 'production',
    }),
  ],
})
export class DatabaseConfig {}
