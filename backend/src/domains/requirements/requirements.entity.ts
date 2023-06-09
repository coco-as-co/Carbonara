import { Max } from 'class-validator';
import { Question } from 'src/domains/questions/question.entity';
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
import { Quest } from '../quests/quests.entity';
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
  quest: Quest;

  @OneToMany(() => Question, (question) => question.id)
  questions: Question[];
}
