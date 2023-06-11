import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { Question } from '../../../domains/questions/questions.entity';
import { questions } from './questions.data';

export class QuestionSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const questionsData: Question[] = dataSource.manager
      .getRepository(Question)
      .create([...questions]);

    await dataSource.manager.getRepository(Question).insert([...questionsData]);
  }
}
