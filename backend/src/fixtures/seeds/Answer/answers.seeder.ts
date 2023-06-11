import { Answer } from '../../../domains/answers/answers.entity';
import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { answers } from './answers.data';

export class AnswerSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const answersData: Answer[] = dataSource.manager
      .getRepository(Answer)
      .create(answers);

    await dataSource.manager
      .getRepository(Answer)
      .insert([...answersData]);
  }
}
