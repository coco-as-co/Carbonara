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
import { Question } from 'src/domains/questions/question.entity';
@Entity()
export class Requirement {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  requirementId: string;

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

  @OneToMany(() => Question, (question) => question.id)
  questions: Question;
}
