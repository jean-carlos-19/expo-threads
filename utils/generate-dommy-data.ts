import { faker } from '@faker-js/faker';

export function createRandomFollower(): User {
 return {
  id: faker.string.uuid(),
  name: faker.person.firstName() + ' ' + faker.person.lastName(),
  username: faker.internet.userName(),
  verified: Math.random() >= 0.5,
  photo: faker.image.avatar(),
  bio: faker.lorem.sentence(),
  link: faker.internet.url(),
 };
}
export function createRandomUser(): User {
 return {
  id: faker.string.uuid(),
  name: faker.person.firstName() + ' ' + faker.person.lastName(),
  username: faker.internet.userName(),
  verified: Math.random() >= 0.5,
  photo: faker.image.avatar(),
  bio: faker.lorem.sentence(),
  link: faker.internet.url(),
  followers: new Array(Math.floor(Math.random() * 100))
   .fill(null)
   .map(createRandomFollower),
 };
}

export function createRandomReply(): Reply {
 return {
  id: faker.string.uuid(),
  author: createRandomUser(),
  content: faker.lorem.paragraph(),
  likes: Math.floor(Math.random() * 100),
  createdAt: faker.date.past().toISOString(),
 };
}

export function createRandomThread(): Thread {
 return {
  id: faker.string.uuid(),
  author: createRandomUser(),
  content: faker.lorem.paragraph(),
  createdAt: faker.date.recent().toISOString(),
  likescount: Math.floor(Math.random() * 100),
  repliesCount: Math.floor(Math.random() * 100),
  replies: new Array(Math.floor(Math.random() * 100))
   .fill(null)
   .map(createRandomReply),
  mentionUser: createRandomUser(),
  metions: Math.random() >= 0.5,
  image: Math.random() > 0.5 ? faker.image.avatar() : undefined,
 };
}

export function generateThreads(): Thread[] {
 return new Array(10).fill(null).map(createRandomThread);
}
