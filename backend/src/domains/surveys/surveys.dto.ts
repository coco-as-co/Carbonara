import { IsDate, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateSurveysDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsDate()
  endedAt: Date;

  @IsString()
  choice1: string;

  @IsString()
  choice2: string;

  @IsString()
  @IsOptional()
  choice3?: string;

  @IsString()
  @IsOptional()
  choice4?: string;

  @IsString()
  @IsOptional()
  choice5?: string;

  @IsString()
  @IsOptional()
  choice6?: string;
}

export class UpdateSurveysDto {
  @IsUUID()
  id: string;

  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsDate()
  @IsOptional()
  endedAt?: Date;

  @IsString()
  @IsOptional()
  choice1?: string;

  @IsString()
  @IsOptional()
  choice2?: string;

  @IsString()
  @IsOptional()
  choice3?: string;

  @IsString()
  @IsOptional()
  choice4?: string;

  @IsString()
  @IsOptional()
  choice5?: string;

  @IsString()
  @IsOptional()
  choice6?: string;
}
