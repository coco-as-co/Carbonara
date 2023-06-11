import { DeepPartial } from 'typeorm';
import { faker } from '@faker-js/faker';
import { Quest } from 'src/domains/quests/quests.entity';
import { randomInt } from 'crypto';

export const quests: DeepPartial<Quest>[] = Array.from({ length: 160 }).map(
    (_, i) => {
        const paddedI = String(i).padStart(12, '0');
        return {
            id: `19928ed9-003a-490b-90ab-${paddedI}`,
            name: faker.word.words({ count: { min: 5, max: 8 } }),
            description: faker.word.words({ count: { min: 10, max: 20 } }),
            difficulty: faker.number.int({ min: 1, max: 5 }).toString(),
            experience: faker.number.int({ min: 40, max: 120 }),
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: null,
            skill: { id: `19978ed9-003a-490b-90ab-c5447268194${randomInt(10)}` },
            userQuests: [],
            requirements: [],
            suggestions: [],

        };
    },
);
