import { Exclude } from 'class-transformer';
import { IsEmail, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  @Exclude()
  password: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @Length(255)
  firstname: string;

  @Column()
  @Length(255)
  lastname: string;
}
