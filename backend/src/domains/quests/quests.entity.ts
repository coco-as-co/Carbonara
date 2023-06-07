import { IsDate, Length } from 'class-validator';
import { UserQuest } from 'src/domains/user_quests/userQuest.entity';
import { Requirement } from 'src/domains/requirements/requirements.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Skill } from '../skills/skills.entity';
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
  experience: number;

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

  @OneToMany(() => Requirement, (requirement) => requirement.quests)
  requirementId: Requirement[];
}
