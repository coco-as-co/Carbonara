import { DeepPartial } from 'typeorm';
import { faker } from '@faker-js/faker';
import { Skill } from 'src/domains/skills/skills.entity';

export const skills: DeepPartial<Skill>[] = Array.from({ length: 10 }).map(
    (_, i) => {
        return {
            id: `19978ed9-003a-490b-90ab-c5447268194${i}`,
            name: faker.word.words({ count: { min: 1, max: 2 } }),
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: null,
            quests: [],
        };
    },
);
