import { DeepPartial } from 'typeorm';
import { Comment } from '../../../domains/comments/comments.entity';
import { faker } from '@faker-js/faker';
import { randomInt } from 'crypto';

export const comments: DeepPartial<Comment>[] = Array.from({ length: 10 }).map(
  (_, i) => {
    return {
      id: `8f598ed9-003a-490b-90ab-c5447268194${i}`,
      content: faker.lorem.paragraph(),
      title: faker.lorem.sentence(),
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
      article: {
        id: `5f598ed9-003a-490b-90ab-c5447268194${randomInt(0, 10)}`,
      },
      user: {
        id: `2f598ed9-003a-490b-90ab-c5447268194${randomInt(0, 10)}`,
      },
    };
  },
);

export const commentsTwo: DeepPartial<Comment>[] = Array.from({
  length: 10,
}).map((_, i) => {
  return {
    id: `8f598ed9-003a-490b-90ab-c5447268195${i}`,
    content: faker.lorem.paragraph(),
    title: faker.lorem.sentence(),
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    article: {
      id: `5f598ed9-003a-490b-90ab-c5447268194${randomInt(0, 10)}`,
    },
    user: {
      id: `2f598ed9-003a-490b-90ab-c5447268194${randomInt(0, 10)}`,
    },
  };
});
