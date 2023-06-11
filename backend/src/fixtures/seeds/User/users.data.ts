import { DeepPartial } from 'typeorm';
import { User, RoleUser } from '../../../domains/users/users.entity';
import { faker } from '@faker-js/faker';
import * as bcrypt from 'bcrypt';

export const users: DeepPartial<User>[] = Array.from({ length: 10 }).map(
  (_, i) => {
    return {
      id: `2f598ed9-003a-490b-90ab-c5447268194${i}`,
      email: faker.internet.email(),
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      experience: faker.number.int(1000),
      address: faker.location.streetAddress(),
      phone: faker.phone.number('##########'),
      birthday: faker.date.past(),
      password: bcrypt.hashSync('password', 10),
      role: RoleUser.CONSULTANT,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
      userQuests: [],
      clientMissions: [],
      consultantMissions: [],
      votes: [
        // { id: '122' },
        // { id: '123' },
        // { id: '124' },
        // { id: '126' },
        // { id: '126' },
        // { id: '127' },
        // { id: '128' },
      ],
      suggestions: [],
      boxeIdeas: [],
      reviews: [],
    };
  },
);

export const admins: DeepPartial<User>[] = [
  {
    id: '2f598ed9-003a-490b-90ab-c54472681911',
    email: faker.internet.email(),
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    experience: faker.number.int(1000),
    address: faker.location.streetAddress(),
    phone: faker.phone.number('##########'),
    birthday: faker.date.past(),
    password: bcrypt.hashSync('password', 10),
    role: RoleUser.ADMIN,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    userQuests: [],
    clientMissions: [],
    consultantMissions: [],
    votes: [],
    suggestions: [],
    boxeIdeas: [],
    reviews: [],
  },
];
