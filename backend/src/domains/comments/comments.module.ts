import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { Comment } from './comments.entity';
import { ArticlesService } from '../articles/articles.service';
import { Article } from '../articles/articles.entity';
import { User } from '../users/users.entity';
import { UsersService } from '../users/users.service';
@Module({
  imports: [TypeOrmModule.forFeature([Comment, Article, User])],
  controllers: [CommentsController],
  providers: [CommentsService, ArticlesService, UsersService],
  exports: [CommentsService],
})
export class CommentsModule {}
