import { IsString, IsUUID, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Quest } from '../quests/quests.entity';
export class CreateSkillDto {
  @IsString()
  name: string;

  @ValidateNested()
  @Type(() => Quest)
  quest: Quest;
}

export class UpdateSkillDto {
  @IsUUID()
  id: string;

  @IsString()
  name: string;

  @ValidateNested()
  @Type(() => Quest)
  quest: Quest;
}
