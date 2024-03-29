import { User } from '../../../domains/users/users.entity';
import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { admins, users, consultant } from './users.data';

export class UserSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const usersData: User[] = dataSource.manager
      .getRepository(User)
      .create([...admins, ...users, ...consultant]);

    await dataSource.manager.getRepository(User).insert([...usersData]);
  }
}
