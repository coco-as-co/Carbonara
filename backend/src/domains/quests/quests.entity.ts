import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { IsDate, Length } from 'class-validator';
import { Skill } from '../skills/skills.entity';
import { userQuest } from '../user_quests/userQuest.entity';
@Entity()
export class Quest {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Length(255)
  name: string;

  @Column()
  @Length(255)
  description: string;

  @Column()
  @Length(255)
  difficulty: string;

  @Column()
  @Length(255)
  experience: string;

  @CreateDateColumn()
  @IsDate()
  createdAt: Date;

  @UpdateDateColumn()
  @IsDate()
  updatedAt: Date;

  @DeleteDateColumn()
  @IsDate()
  deletedAt: Date;

  @ManyToOne(() => Skill)
  @JoinColumn({ name: 'skill_id' })
  skill: Skill;

  @Column()
  skill_id: string;

  @ManyToOne(() => userQuest, (userQuest) => userQuest.quests)
  userQuest: userQuest;
}
