import { IsString, IsUUID, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Quest } from '../quests/quests.entity';
export class CreateRequirementDto {
  @IsString()
  name: string;

  @ValidateNested()
  @Type(() => Quest)
  quest: Quest;
}

export class UpdateRequirementDto {
  @IsUUID()
  id: string;

  @IsString()
  name: string;

  @ValidateNested()
  @Type(() => Quest)
  quest: Quest;
}
