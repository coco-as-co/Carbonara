import { IsEnum, IsString, IsUUID } from 'class-validator';
import { BadgeStatus } from './badges.entity';
export class CreateBadgeDto {
  @IsString()
  name: string;

  @IsEnum(BadgeStatus)
  status: BadgeStatus;
}

export class UpdateBadgeDto {
  @IsUUID()
  id: string;

  @IsString()
  name: string;

  @IsEnum(BadgeStatus)
  status: BadgeStatus;
}
