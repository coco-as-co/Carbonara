import { Review } from '../reviews/reviews.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm';
import { Badge } from '../badges/badges.entity';
import { Quest } from '../quests/quests.entity';
import { User } from '../users/users.entity';
export enum UserQuestStatus {
  TODO = 'todo',
  PENDING = 'pending',
  DONE = 'done',
}
@Entity()
export class UserQuest {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    type: 'enum',
    enum: UserQuestStatus,
    default: UserQuestStatus.TODO,
  })
  status: UserQuestStatus;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => Badge, (badge) => badge.id)
  badge: Badge;

  @ManyToOne(() => User, (user) => user.userQuests)
  user: User;

  @ManyToOne(() => Quest, (quest) => quest.userQuests)
  quest: Quest;

  @OneToOne(() => Review, (review) => review.userQuest)
  review: Review;
}
