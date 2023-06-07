import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/domains/users/users.entity';
import { Quest } from 'src/domains/quests/quests.entity';
import { Skill } from 'src/domains/skills/skills.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [User, Quest, Skill],
      synchronize: process.env.ENV !== 'production',
    }),
  ],
})
export class DatabaseConfig {}
