import { IsDate, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateSurveysDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsDate()
  endedAt: Date;
}

export class UpdateSurveysDto {
  @IsUUID()
  id: string;

  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  content: string;

  @IsOptional()
  @IsDate()
  endedAt: Date;
}
