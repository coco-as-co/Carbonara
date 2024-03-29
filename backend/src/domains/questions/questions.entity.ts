import { IsDate, Length } from 'class-validator';
import { Answer } from '../answers/answers.entity';
import { Requirement } from '../requirements/requirements.entity';
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
  requirement: Requirement;

  @OneToMany(() => Answer, (answer) => answer.question)
  answers: Answer[];
}
