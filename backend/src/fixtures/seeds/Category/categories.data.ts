import { Category } from '../../../domains/categories/categories.entity';
import { faker } from '@faker-js/faker';

export const categories: Category[] = Array.from({ length: 10 }).map((_, i) => {
  return {
    id: `3f598ed9-003a-490b-90ab-c5447268194${i}`,
    name: faker.lorem.word(),
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    articles: [],
  };
});
