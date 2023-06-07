import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Length } from 'class-validator';
import { Badge } from '../badges/badges.entity';
import { User } from '../users/users.entity';
import { Quest } from '../quests/quests.entity';
@Entity()
export class userQuest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Length(255)
  status: string;

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

  @Column()
  questId: number;

  @OneToMany(() => Badge, (badge) => badge.id)
  badges: Badge[];

  @OneToMany(() => User, (user) => user.id)
  users: User[];

  @OneToMany(() => Quest, (quest) => quest.id)
  quests: Quest[];
}
