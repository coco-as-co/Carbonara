import { IsEnum, IsOptional, IsUUID, ValidateNested } from 'class-validator';
import { UserQuestStatus } from '../user_quests/userQuest.entity';
import { Badge } from '../badges/badges.entity';

export class CreateUserQuestDto {
  @IsEnum(UserQuestStatus)
  status: UserQuestStatus;

  @IsOptional()
  @ValidateNested()
  badge?: Badge;
}

export class UpdateUserQuestDto {
  @ValidateNested()
  @IsUUID()
  id: string;

  @IsEnum(UserQuestStatus)
  status?: UserQuestStatus;

  @IsOptional()
  @ValidateNested()
  badge?: Badge;
}
