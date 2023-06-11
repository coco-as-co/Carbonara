import { IsDate, Length } from 'class-validator';
import { Requirement } from '../requirements/requirements.entity';
import { Suggestion } from '../suggestions/suggestions.entity';
import { UserQuest } from '../user_quests/userQuest.entity';
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
  skill: Skill;

  @OneToMany(() => UserQuest, (userQuest) => userQuest.quest)
  userQuests: UserQuest[];

  @OneToMany(() => Requirement, (requirement) => requirement.quest)
  requirements: Requirement[];

  @OneToMany(() => Suggestion, (suggestion) => suggestion.quests)
  suggestions: Suggestion[];
}
