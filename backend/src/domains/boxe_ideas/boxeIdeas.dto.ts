import { IsString, IsUUID, MaxLength } from 'class-validator';

export class CreateBoxeIdeaDto {
  @IsString()
  content: string;

  @IsString()
  @MaxLength(255)
  name: string;
}

export class UpdateBoxeIdeaDto {
  @IsUUID()
  id: string;

  @IsString()
  content: string;

  @IsString()
  @MaxLength(255)
  name: string;
}
