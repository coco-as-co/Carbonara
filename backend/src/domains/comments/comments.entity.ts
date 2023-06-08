import { IsDate, Length } from 'class-validator';
import { Article } from 'src/domains/articles/articles.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Length(255)
  title: string;

  @Column('text')
  content: string;

  @IsDate()
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  @IsDate()
  updatedAt: Date;

  @DeleteDateColumn()
  @IsDate()
  deletedAt: Date;

  @ManyToOne(() => Article, (article) => article)
  @JoinColumn()
  article: string;
}
