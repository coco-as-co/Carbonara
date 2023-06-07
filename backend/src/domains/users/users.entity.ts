import { Exclude } from 'class-transformer';
import { IsDate, IsEmail, IsNumber, Length, Max } from 'class-validator';
import { Mission } from 'src/domains/missions/missions.entity';
import { UserQuest } from 'src/domains/user_quests/userQuest.entity';
import { Vote } from 'src/domains/votes/votes.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Max(255)
  lastname: string;

  @Column()
  @Max(255)
  firstname: string;

  @Column()
  @Max(255)
  address: string;

  @Column()
  @Max(10)
  phone: string;

  @Column({ unique: true })
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

  @Column()
  @Exclude()
  @Length(8, 20)
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

  @OneToMany(() => UserQuest, (userQuest) => userQuest.users)
  userQuests: UserQuest[];

  @OneToMany(() => Vote, (vote) => vote.user)
  votes: Vote[];

  @OneToMany(() => Mission, (mission) => mission.user)
  missions: Mission[];
}
