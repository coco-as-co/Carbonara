import { Survey } from 'src/domains/surveys/survey.entity';
import { Vote } from 'src/domains/votes/votes.entity';
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

  @ManyToOne(() => Survey, (survey) => survey.choices)
  surveys: Survey[];

  @OneToMany(() => Vote, (vote) => vote.userId)
  votes: Vote[];
}
