import { IsEmail, IsString, IsStrongPassword, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsString()
  @Length(8)
  @IsStrongPassword()
  password: string;

  @IsString()
  @IsEmail()
  email: string;
}

export class UpdateUserDto {
  @IsString()
  firstname?: string;

  @IsString()
  lastname?: string;
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
