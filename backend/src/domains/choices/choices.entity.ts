import { Survey } from '../surveys/surveys.entity';
import { Vote } from '../votes/votes.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Choice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  content: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => Survey, (surveys) => surveys.choices)
  @JoinColumn()
  survey: Survey;

  @OneToMany(() => Vote, (vote) => vote.choice)
  votes: Vote[];
}
