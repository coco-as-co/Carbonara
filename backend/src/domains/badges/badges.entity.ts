import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserQuest } from '../user_quests/userQuest.entity';
export enum BadgeStatus {
  THEORY = 'theory',
  PRATICAL = 'pratical',
}

@Entity()
export class Badge {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  image: string;

  @Column({
    type: 'enum',
    enum: 'BadgeStatus',
    default: BadgeStatus.THEORY,
  })
  status: BadgeStatus;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => UserQuest, (userQuest) => userQuest.badgeId)
  userQuests: UserQuest[];
}
