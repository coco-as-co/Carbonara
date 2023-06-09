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
import { Max } from 'class-validator';
import { Quest } from '../quests/quests.entity';
import { Question } from 'src/domains/questions/questions.entity';
@Entity()
export class Requirement {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Max(255)
  name: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => Quest, (quest) => quest.id)
  quests: Quest;

  @OneToMany(() => Question, (question) => question.requirement)
  questions: Question[];
}
