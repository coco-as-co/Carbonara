import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { quests } from './quests.data';
import { Quest } from '../../../domains/quests/quests.entity';

export class QuestSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const questsData: Quest[] = dataSource.manager
      .getRepository(Quest)
      .create([...quests]);

    await dataSource.manager.getRepository(Quest).insert([...questsData]);
  }
}
