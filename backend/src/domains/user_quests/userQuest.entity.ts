import { Review } from 'src/domains/reviews/reviews.entity';
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
  id: number;

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

  @Column()
  userId: number;

  @ManyToOne(() => Badge, (badge) => badge.id)
  badgeId: Badge;

  @OneToMany(() => User, (user) => user.id)
  users: User[];

  @OneToMany(() => Quest, (quest) => quest.id)
  quests: Quest[];

  @OneToMany(() => Review, (review) => review.client)
  reviews: Review[];
}
