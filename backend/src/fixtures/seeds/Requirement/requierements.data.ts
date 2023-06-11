import { DeepPartial } from 'typeorm';
import { faker } from '@faker-js/faker';
import { Requirement } from 'src/domains/requirements/requirements.entity';
import { randomInt } from 'crypto';

export const requirements: DeepPartial<Requirement>[] = Array.from({ length: 40 }).map(
    (_, i) => {
        const paddedI = String(i).padStart(12, '0');
        return {
            id: `19988ed9-003a-490b-90ab-${paddedI}`,
            name: faker.word.words({ count: { min: 5, max: 10 } }),
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: null,
            quest: { id: `19928ed9-003a-490b-90ab-${String(Math.floor(i / 4) > 0 ? Math.floor(i / 4) : 1).padStart(12, '0')}` },
        };
    },
);
