import { Article } from '../../../domains/articles/articles.entity';
import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { articles } from './articles.data';
export class ArticleSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const articlesData: Article[] = dataSource.manager
      .getRepository(Article)
      .create(articles);

    await dataSource.manager.getRepository(Article).insert([...articlesData]);
  }
}
