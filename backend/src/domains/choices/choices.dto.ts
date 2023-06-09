import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateChoicesDto {
  @IsString()
  content: string;

  @IsUUID()
  surveyId: string;
}

export class UpdateChoicesDto {
  @IsUUID()
  id: string;

  @IsOptional()
  @IsString()
  content: string;

  @IsOptional()
  @IsUUID()
  surveyId: string;
}
