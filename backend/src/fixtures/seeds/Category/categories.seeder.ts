import { Category } from '../../../domains/categories/categories.entity';
import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { categories } from './categories.data';

export class CategorySeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const categoriesData: Category[] = dataSource.manager
      .getRepository(Category)
      .create(categories);

    await dataSource.manager
      .getRepository(Category)
      .insert([...categoriesData]);
  }
}
