import { IsPositive, IsString, IsUUID, ValidateNested } from 'class-validator';
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

  @IsUUID()
  skill_id: string;
}

export class UpdateQuestDto {
  @IsUUID()
  id: string;

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
