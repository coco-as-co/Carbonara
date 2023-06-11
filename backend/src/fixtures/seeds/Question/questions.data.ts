import { DeepPartial } from 'typeorm';
import { faker } from '@faker-js/faker';
import { Question } from 'src/domains/questions/questions.entity';
import { randomInt } from 'crypto';

export const questions: DeepPartial<Question>[] = Array.from({ length: 160 }).map(
    (_, i) => {
        const paddedI = String(i).padStart(12, '0');
        return {
            id: `19928ed9-003a-490b-90ab-${paddedI}`,
            name: faker.word.words({ count: { min: 5, max: 8 } }),
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: null,
            requirement: { id: `19988ed9-003a-490b-90ab-${String(Math.floor(i / 4) > 0 ? Math.floor(i / 4) : 1).padStart(12, '0')}` },
            answers: [],
        };
    },
);
