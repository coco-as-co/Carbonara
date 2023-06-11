import { DeepPartial } from 'typeorm';
import { faker } from '@faker-js/faker';
import { randomInt } from 'crypto';
import { BoxeIdeas } from '../../../domains/boxe_ideas/boxeIdeas.entity';

export const BoxeIdea: DeepPartial<BoxeIdeas>[] = Array.from({
  length: 10,
}).map((_, i) => {
  return {
    id: `3f588ed9-003a-490b-90ab-c5447268194${i}`,
    name: faker.word.noun(),
    content: faker.lorem.paragraph(),
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    user: {
      id: `2f598ed9-003a-490b-90ab-c5447268194${randomInt(0, 10)}`,
    },
  };
});
