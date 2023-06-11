import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { Answer } from '../domains/answers/answers.entity';
import { Article } from '../domains/articles/articles.entity';
import { Badge } from '../domains/badges/badges.entity';
import { BoxeIdeas } from '../domains/boxe_ideas/boxeIdeas.entity';
import { Category } from '../domains/categories/categories.entity';
import { Choice } from '../domains/choices/choices.entity';
import { Comment } from '../domains/comments/comments.entity';
import { Mission } from '../domains/missions/missions.entity';
import { Question } from '../domains/questions/questions.entity';
import { Quest } from '../domains/quests/quests.entity';
import { Requirement } from '../domains/requirements/requirements.entity';
import { Review } from '../domains/reviews/reviews.entity';
import { Skill } from '../domains/skills/skills.entity';
import { Suggestion } from '../domains/suggestions/suggestions.entity';
import { Survey } from '../domains/surveys/surveys.entity';
import { UserQuest } from '../domains/user_quests/userQuest.entity';
import { User } from '../domains/users/users.entity';
import { Vote } from '../domains/votes/votes.entity';
import { MainSeeder } from './seeds/main.seeder';

const options: DataSourceOptions & SeederOptions = {
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
  seeds: [MainSeeder],
};

export const AppDataSource = new DataSource(options);
