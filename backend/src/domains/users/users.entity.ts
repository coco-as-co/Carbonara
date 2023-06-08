import { Exclude } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsNumber,
  IsOptional,
  Length,
  Max,
} from 'class-validator';
import { Mission } from 'src/domains/missions/missions.entity';
import { Review } from 'src/domains/reviews/reviews.entity';
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
import { BoxeIdeas } from '../boxe_ideas/boxeIdeas.entity';
import { Suggestion } from '../suggestions/suggestion.entity';
export enum RoleUser {
  ADMIN = 'ADMIN',
  CLIENT = 'CLIENT',
  COMMERCIAL = 'COMMERCIAL',
  CONSULTANT = 'CONSULTANT',
  RH = 'RH',
}

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
  @IsOptional()
  address: string;

  @Column()
  @Max(10)
  @IsOptional()
  phone: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  @IsDate()
  @IsOptional()
  birthday: Date;

  @Max(255)
  @Column({
    type: 'enum',
    enum: RoleUser,
  })
  role: RoleUser;

  @Column()
  @IsNumber()
  @IsOptional()
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

  @OneToMany(() => Mission, (mission) => mission.client)
  clientMissions: Mission[];

  @OneToMany(() => Mission, (mission) => mission.consultant)
  consultantMissions: Mission[];

  @OneToMany(() => Suggestion, (suggestion) => suggestion.user)
  suggestions: Suggestion[];

  @OneToMany(() => BoxeIdeas, (boxeIdeas) => boxeIdeas.user)
  boxeIdeas: BoxeIdeas[];

  @OneToMany(() => Review, (review) => review.client)
  reviews: Review[];
}
