import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  name: string;
}

export class UpdateCategoryDto {
  @IsString()
  name: string;
}

export class UpdateCategoryDtoWrapper {
  @IsString()
  id: string;

  @ValidateNested()
  @Type(() => UpdateCategoryDto)
  body: UpdateCategoryDto;
}
