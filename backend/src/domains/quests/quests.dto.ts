import {
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Skill } from '../skills/skills.entity';
export class CreateQuestDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  difficulty: string;

  @IsPositive()
  experience: number;

  @ValidateNested()
  @Type(() => Skill)
  skill: Skill;
}

export class UpdateQuestDto {
  @IsUUID()
  id: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  difficulty: string;

  @IsPositive()
  @IsOptional()
  experience: number;

  @IsOptional()
  @ValidateNested()
  @Type(() => Skill)
  skill: Skill;
}
