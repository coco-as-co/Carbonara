import { Length } from 'class-validator';
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
@Entity()
export class UserQuest {
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

  @ManyToOne(() => Badge, (badge) => badge.id)
  badgeId: Badge;

  @OneToMany(() => User, (user) => user.id)
  users: User[];

  @OneToMany(() => Quest, (quest) => quest.id)
  quests: Quest[];
}
