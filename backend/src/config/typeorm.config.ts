import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from 'src/domains/articles/article.entity';
import { Badge } from 'src/domains/badges/badges.entity';
import { Category } from 'src/domains/categories/categories.entity';
import { Choice } from 'src/domains/choices/choices.entity';
import { Client } from 'src/domains/clients/clients.entity';
import { Comment } from 'src/domains/comment/comment.entity';
import { Mission } from 'src/domains/missions/missions.entity';
import { Quest } from 'src/domains/quests/quests.entity';
import { Review } from 'src/domains/reviews/reviews.entity';
import { Skill } from 'src/domains/skills/skills.entity';
import { Survey } from 'src/domains/surveys/survey.entity';
import { UserQuest } from 'src/domains/user_quests/userQuest.entity';
import { User } from 'src/domains/users/users.entity';
import { Vote } from 'src/domains/votes/votes.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [
        Category,
        User,
        UserQuest,
        Client,
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
      ],
      synchronize: process.env.ENV !== 'production',
    }),
  ],
})
export class DatabaseConfig {}
