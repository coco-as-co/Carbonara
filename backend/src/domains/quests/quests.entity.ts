import { IsDate, Length } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Skill } from '../skills/skills.entity';
import { UserQuest } from '../user_quests/userQuest.entity';
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

  @ManyToOne(() => Skill, (skill) => skill.quests)
  skillId: string;

  @ManyToOne(() => UserQuest, (userQuest) => userQuest.quests)
  userQuestId: UserQuest;
}
