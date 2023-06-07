import { Exclude } from 'class-transformer';
import { IsDate, IsEmail, IsNumber, Length } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
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
  @Length(255)
  address: string;

  @Column()
  @Length(10)
  phone: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @IsDate()
  birthday: Date;

  @Column()
  @Length(255)
  role: string;

  @Column()
  @IsNumber()
  experience: number;

  @Column({ unique: true })
  @Exclude()
  password: string;

  @CreateDateColumn()
  @IsDate()
  createdAt: Date;

  @UpdateDateColumn()
  @IsDate()
  updatedAt: Date;

  @DeleteDateColumn()
  @IsDate()
  deletedAt: Date;
}
