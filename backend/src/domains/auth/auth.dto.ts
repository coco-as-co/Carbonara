import {
  IsAlpha,
  IsEmail,
  IsString,
  IsStrongPassword,
  IsUUID,
  Length,
} from 'class-validator';

export class AuthLoginDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class AuthRegisterDto {
  @IsAlpha()
  @Length(255)
  firstname: string;

  @IsAlpha()
  @Length(255)
  lastname: string;

  @IsEmail()
  email: string;

  @IsStrongPassword()
  @Length(8, 20)
  password: string;
}

export class AuthJwtPayloadDto {
  @IsEmail()
  email: string;
  @IsString()
  firstname: string;
  @IsString()
  lastname: string;
  @IsUUID()
  id: number;
}
