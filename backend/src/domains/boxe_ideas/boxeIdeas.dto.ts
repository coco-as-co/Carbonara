import { IsString, IsUUID, MaxLength, ValidateNested } from 'class-validator';
import { User } from '../users/users.entity';
import { Type } from 'class-transformer';

export class CreateBoxeIdeaDto {
  @IsString()
  content: string;

  @IsString()
  @MaxLength(255)
  name: string;

  @ValidateNested()
  @Type(() => User)
  user: User;
}

export class UpdateBoxeIdeaDto {
  @IsUUID()
  id: string;

  @IsString()
  content: string;

  @IsString()
  @MaxLength(255)
  name: string;

  @ValidateNested()
  @Type(() => User)
  user: User;
}
