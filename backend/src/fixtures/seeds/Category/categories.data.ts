import { Category } from '../../../domains/categories/categories.entity';
import { faker } from '@faker-js/faker';
import { DeepPartial } from 'typeorm';

export const categories: DeepPartial<Category>[] = Array.from({
  length: 10,
}).map((_, i) => {
  return {
    id: `3f598ed9-003a-490b-90ab-c5447268194${i}`,
    name: faker.word.noun(),
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    articles: [],
  };
});
