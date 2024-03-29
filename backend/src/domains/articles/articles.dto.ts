import {
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { Category } from '../categories/categories.entity';
import { Type } from 'class-transformer';
import { User } from '../users/users.entity';

export class CreateArticlesDto {
  @IsString()
  @MaxLength(255)
  title: string;

  @IsString()
  content: string;

  @IsUUID()
  user: User

  @IsUUID()
  @ValidateNested()
  @Type(() => Category)
  category: Category;
}

export class UpdateArticlesDto {
  @IsUUID()
  id: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  title: string;

  @IsOptional()
  @IsString()
  content: string;

  @IsOptional()
  @IsUUID()
  @ValidateNested()
  @Type(() => Category)
  category: Category;
}
