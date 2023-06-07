import { Exclude } from 'class-transformer';
import { IsDate, IsEmail } from 'class-validator';
import { Mission } from 'src/domains/missions/missions.entity';
import { Review } from 'src/domains/reviews/reviews.entity';
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
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsEmail()
  mail: string;

  @Column()
  @Exclude()
  password: string;

  @CreateDateColumn()
  @IsDate()
  createdAt: Date;

  @UpdateDateColumn()
  @IsDate()
  updatedAt: Date;

  @DeleteDateColumn()
  @IsDate()
  deletedAt: Date;

  @OneToMany(() => Mission, (mission) => mission.client)
  missions: Mission[];

  @OneToMany(() => Review, (review) => review.client)
  reviews: Review[];
}
