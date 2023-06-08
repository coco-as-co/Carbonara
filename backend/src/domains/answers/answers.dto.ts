import { IsString, IsUUID, ValidateNested, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';
import { Question } from '../questions/questions.entity';
export class CreateAnswerDto {
  @IsString()
  name: string;

  @IsBoolean()
  isCorrect: boolean;

  @ValidateNested()
  @Type(() => Question)
  question: Question;
}

export class UpdateAnswerDto {
  @IsUUID()
  id: string;

  @IsString()
  name: string;

  @IsBoolean()
  isCorrect: boolean;
}
