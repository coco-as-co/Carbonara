import { IsDate, Length } from 'class-validator';
import { Category } from '../categories/categories.entity';
import { Comment } from '../comments/comments.entity';
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
export class Article {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Length(255)
  title: string;

  @Column('text')
  content: string;

  @CreateDateColumn()
  @IsDate()
  createdAt: Date;

  @UpdateDateColumn()
  @IsDate()
  updatedAt: Date;

  @DeleteDateColumn()
  @IsDate()
  deletedAt: Date;

  @ManyToOne(() => Category, (category) => category.articles)
  @JoinColumn()
  category: Category;

  @OneToMany(() => Comment, (comment) => comment.article)
  comments: Comment[];
}
