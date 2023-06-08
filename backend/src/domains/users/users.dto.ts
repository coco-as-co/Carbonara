import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsStrongPassword,
  Length,
  Max,
  ValidateNested,
} from 'class-validator';
import { RoleUser } from 'src/domains/users/users.entity';

export class CreateUserDto {
  @IsString()
  @Max(255)
  firstname: string;

  @IsString()
  @Max(255)
  lastname: string;

  @IsString()
  @Length(8)
  @IsStrongPassword()
  password: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  @Max(255)
  address?: string;

  @IsString()
  @IsOptional()
  @Max(10)
  phone?: string;

  @IsDate()
  @IsOptional()
  birthday?: Date;

  @IsEnum(RoleUser)
  role: RoleUser;

  @IsNumber()
  @IsOptional()
  experience?: number;
}

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @Max(255)
  firstname?: string;

  @IsString()
  @IsOptional()
  @Max(255)
  lastname?: string;

  @IsString()
  @IsOptional()
  @Max(255)
  address?: string;

  @IsString()
  @IsOptional()
  @Max(10)
  phone?: string;

  @IsDate()
  @IsOptional()
  birthday?: Date;

  @IsEnum(RoleUser)
  @IsOptional()
  role?: RoleUser;

  @IsNumber()
  @IsOptional()
  experience?: number;
}

export class UpdateUserDtoWrapper {
  @IsString()
  id: string;

  @ValidateNested()
  @Type(() => UpdateUserDto)
  body: UpdateUserDto;
}

export class UpdateUserPasswordDto {
  @IsString()
  @Length(8)
  @IsStrongPassword()
  password: string;
}

export class UpateUserEmailDto {
  @IsString()
  @IsEmail()
  email: string;
}
