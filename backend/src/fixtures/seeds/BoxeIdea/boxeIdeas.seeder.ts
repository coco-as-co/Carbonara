import { BoxeIdeas } from '../../../domains/boxe_ideas/boxeIdeas.entity';
import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { BoxeIdea } from './boxeIdeas.data';
export class BoxeIdeaSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const boxeIdeaData: BoxeIdeas[] = dataSource.manager
      .getRepository(BoxeIdeas)
      .create(BoxeIdea);

    await dataSource.manager.getRepository(BoxeIdeas).insert([...boxeIdeaData]);
  }
}
