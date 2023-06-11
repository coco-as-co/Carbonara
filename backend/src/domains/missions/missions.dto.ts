import { IsOptional, IsString, IsUUID } from 'class-validator';
export class CreateMissionsDto {
  @IsString()
  name: string;

  @IsString()
  description: string;
}

export class UpdateMissionsDto {
  @IsUUID()
  id: string;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;
}
