import { Comment } from '../../../domains/comments/comments.entity';
import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { comments, commentsTwo } from './comments.data';
export class CommentSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const commentsData: Comment[] = dataSource.manager
      .getRepository(Comment)
      .create([...comments, ...commentsTwo]);

    await dataSource.manager.getRepository(Comment).insert([...commentsData]);
  }
}
