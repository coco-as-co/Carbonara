import { IsDate, Length } from 'class-validator';
import { Quest } from 'src/domains/quests/quests.entity';
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

  @IsDate()
  @CreateDateColumn()
  createdAt: Date;

  @IsDate()
  @UpdateDateColumn()
  updatedAt: Date;

  @IsDate()
  @DeleteDateColumn()
  deletedAt: Date;

  @Column()
  @OneToMany(() => Quest, (quest) => quest.skillId)
  quests: Quest[];
}
