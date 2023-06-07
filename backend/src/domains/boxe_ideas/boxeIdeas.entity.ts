import { Max } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from 'src/domains/users/users.entity';

@Entity()
export class BoxeIdeas {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  content: string;

  @Column()
  @Max(255)
  name: string;

  @OneToMany(() => User, (user) => user.id)
  user: User;
}
