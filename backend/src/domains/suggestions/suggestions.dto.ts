import { IsUUID, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Quest } from '../quests/quests.entity';
import { User } from '../users/users.entity';
export class CreateSuggestionDto {
  @ValidateNested()
  @Type(() => User)
  user: User;

  @ValidateNested()
  @Type(() => Quest)
  quest: Quest;
}

export class UpdateSuggestionDto {
  @IsUUID()
  id: string;

  @ValidateNested()
  @Type(() => User)
  user: User;

  @ValidateNested()
  @Type(() => Quest)
  quest: Quest;
}
