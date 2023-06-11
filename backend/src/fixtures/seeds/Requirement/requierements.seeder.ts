import { Requirement } from '../../../domains/requirements/requirements.entity';
import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { requirements } from './requierements.data';

export class RequierementSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const requirementsData: Requirement[] = dataSource.manager
      .getRepository(Requirement)
      .create([...requirements]);

    await dataSource.manager.getRepository(Requirement).insert([...requirementsData]);
  }
}
