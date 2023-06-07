import { Max } from 'class-validator';
import { Client } from 'src/domains/clients/clients.entity';
import { UserQuest } from 'src/domains/user_quests/userQuest.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
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

  @ManyToOne(() => UserQuest, (user) => user.reviews)
  userQuest: UserQuest;

  @ManyToOne(() => Client, (client) => client.reviews)
  client: Client;
}
