import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateCommentsDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsUUID()
  articleId: string;
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
  articleId: string;
}
