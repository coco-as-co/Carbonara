import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { IsDate, Length } from 'class-validator';
import { Requirement } from 'src/domains/requirements/requirements.entity';
import { Answer } from 'src/domains/answers/answers.entity';
@Entity()
export class Question {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Length(255)
  name: string;

  @CreateDateColumn()
  @IsDate()
  createdAt: Date;

  @UpdateDateColumn()
  @IsDate()
  updatedAt: Date;

  @DeleteDateColumn()
  @IsDate()
  deletedAt: Date;

  @ManyToOne(() => Requirement, (requirement) => requirement.questions)
  questionId: string;

  @OneToMany(() => Answer, (answer) => answer.id)
  answers: Answer;
}
