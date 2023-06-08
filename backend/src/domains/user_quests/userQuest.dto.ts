import { IsEnum, IsOptional, IsUUID, ValidateNested } from 'class-validator';
import { UserQuestStatus } from '../user_quests/userQuest.entity';
import { Badge } from '../badges/badges.entity';
import { User } from '../users/users.entity';
import { Quest } from '../quests/quests.entity';
import { Review } from '../reviews/reviews.entity';

export class CreateUserQuestDto {
  @IsEnum(UserQuestStatus)
  status: UserQuestStatus;

  @IsOptional()
  @ValidateNested()
  badge?: Badge;

  @IsOptional()
  @ValidateNested({ each: true })
  users?: User[];

  @IsOptional()
  @ValidateNested({ each: true })
  quests?: Quest[];

  @IsOptional()
  @ValidateNested({ each: true })
  reviews?: Review[];
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

  @IsOptional()
  @ValidateNested({ each: true })
  users?: User[];

  @IsOptional()
  @ValidateNested({ each: true })
  quests?: Quest[];

  @IsOptional()
  @ValidateNested({ each: true })
  reviews?: Review[];
}
