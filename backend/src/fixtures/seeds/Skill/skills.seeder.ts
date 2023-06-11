import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { skills } from './skills.data';
import { Skill } from '../../../domains/skills/skills.entity';

export class SkillSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const skillsData: Skill[] = dataSource.manager
      .getRepository(Skill)
      .create([...skills]);

    await dataSource.manager.getRepository(Skill).insert([...skillsData]);
  }
}
