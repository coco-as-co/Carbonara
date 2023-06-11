import { DataSource } from 'typeorm';
import { runSeeder, Seeder } from 'typeorm-extension';
import { UserSeeder } from './User/users.seeder';
import { CategorySeeder } from './Category/categories.seeder';

export class MainSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    await dataSource.synchronize(true);

    await runSeeder(dataSource, UserSeeder);
    await runSeeder(dataSource, CategorySeeder);
  }
}
