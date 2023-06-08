import { IsString, IsUUID, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Requirement } from '../requirements/requirements.entity';
export class CreateQuestionDto {
  @IsString()
  name: string;

  @ValidateNested()
  @Type(() => Requirement)
  requirement: Requirement;
}

export class UpdateQuestionDto {
  @IsUUID()
  id: string;

  @IsString()
  name: string;

  @ValidateNested()
  @Type(() => Requirement)
  requirement: Requirement;
}
