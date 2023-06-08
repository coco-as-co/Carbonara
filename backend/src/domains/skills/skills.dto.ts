import { IsString, IsUUID } from 'class-validator';
export class CreateSkillDto {
  @IsString()
  name: string;
}

export class UpdateSkillDto {
  @IsUUID()
  id: string;

  @IsString()
  name: string;
}
