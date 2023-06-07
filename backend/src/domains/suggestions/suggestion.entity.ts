import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/users.entity';
import { Quest } from '../quests/quests.entity';

@Entity()
export class Suggestion {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.suggestions)
  user: User;

  @ManyToOne(() => Quest, (quest) => quest.suggestions)
  quests: Quest;
}
