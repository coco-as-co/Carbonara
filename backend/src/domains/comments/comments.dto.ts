import { IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator';
import { Article } from '../articles/articles.entity';
import { Type } from 'class-transformer';

export class CreateCommentsDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsUUID()
  @ValidateNested()
  @Type(() => Article)
  articleId: Article;
}

export class UpdateCommentsDto {
  @IsUUID()
  id: string;

  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  content: string;

  @IsUUID()
  @IsOptional()
  @ValidateNested()
  @Type(() => Article)
  articleId: Article;
}
