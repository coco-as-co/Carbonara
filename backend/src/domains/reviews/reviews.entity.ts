import { Max } from 'class-validator';
import { UserQuest } from 'src/domains/user_quests/userQuest.entity';
import { User } from 'src/domains/users/users.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Max(255)
  name: string;

  @Column('text')
  content: string;

  @Column()
  isValidated: boolean;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  @DeleteDateColumn()
  deletedAt: Date;

  @OneToOne(() => UserQuest, (userQuest) => userQuest.review)
  @JoinColumn()
  userQuest: UserQuest;

  @ManyToOne(() => User, (user) => user.reviews)
  client: User;
}
