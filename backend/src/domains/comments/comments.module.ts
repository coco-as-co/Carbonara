import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { Comment } from './comments.entity';
import { ArticlesService } from '../articles/articles.service';
import { Article } from '../articles/articles.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Comment, Article])],
  controllers: [CommentsController],
  providers: [CommentsService, ArticlesService],
  exports: [CommentsService],
})
export class CommentsModule {}
