import { Max } from 'class-validator';
import { Client } from 'src/domains/clients/clients.entity';
import { User } from 'src/domains/users/users.entity';
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
export class Mission {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('string')
  @Max(255)
  name: string;

  @Column('text')
  description: string;

  @Column({ type: 'timestamp' })
  startedAt: Date;

  @Column({ type: 'timestamp' })
  endedAt: Date;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => User, (user) => user.missions)
  userId: User;

  @ManyToOne(() => Client, (client) => client.missions)
  clientId: Client;
}
