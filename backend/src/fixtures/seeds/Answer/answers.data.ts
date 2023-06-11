import { DeepPartial } from 'typeorm';
import { Answer } from '../../../domains/answers/answers.entity';
import { faker } from '@faker-js/faker';

export const answers: DeepPartial<Answer[]> = Array.from({ length: 640 }).map((_, i) => {
  const paddedI = String(i).padStart(12, '0');
  return {
    id: `19958ed9-003a-490b-90ab-${paddedI}`,
    name: faker.word.words({ count: { min: 5, max: 8 } }),
    isCorrect: !(i % 4),
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    question: { id: `19928ed9-003a-490b-90ab-${String(Math.floor(i / 4) > 0 ? Math.floor(i / 4) : 1).padStart(12, '0')}` },
  };
});
