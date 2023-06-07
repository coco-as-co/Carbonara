import { Exclude } from 'class-transformer';
import { IsEmail, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Length(255)
  lastname: string;

  @Column()
  @Length(255)
  firstname: string;

  @Column()
  @IsEmail()
  email: string;

  @Column({ unique: true })
  @Exclude()
  password: string;
}
