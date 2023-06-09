import { IsUUID } from 'class-validator';

export class CreateVotesDto {
  @IsUUID()
  userId: string;

  @IsUUID()
  choiceId: string;
}

export class UpdateVotesDto {
  @IsUUID()
  id: string;

  @IsUUID()
  userId: string;

  @IsUUID()
  choiceId: string;
}
