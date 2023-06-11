import { IsDate, Length } from 'class-validator';
import { Quest } from '../quests/quests.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Skill {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Length(255)
  name: string;

  @CreateDateColumn()
  @IsDate()
  createdAt: Date;

  @UpdateDateColumn()
  @IsDate()
  updatedAt: Date;

  @IsDate()
  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => Quest, (quest) => quest.skill)
  quests: Quest[];
}
