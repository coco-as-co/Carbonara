import { faker } from '@faker-js/faker';
import { Article } from '../../../domains/articles/articles.entity';
import { DeepPartial } from 'typeorm';
import { randomInt } from 'crypto';

export const articles: DeepPartial<Article>[] = Array.from({ length: 10 }).map(
  (_, i) => {
    return {
      id: `5f598ed9-003a-490b-90ab-c5447268194${i}`,
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraph(),
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
      comments: [],
      category: {
        id: `3f598ed9-003a-490b-90ab-c5447268194${randomInt(0, 10)}`,
      },
    };
  },
);
