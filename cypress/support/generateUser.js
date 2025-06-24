import { faker } from '@faker-js/faker';

export function generateUser() {
  const randomId = Math.random().toString().slice(2, 6);

  const randomUsername = faker.internet
    .userName()
    .replace(/\./g, '_')
    .replace(/\d+/, '')
    .toLowerCase();

  const username = `${randomUsername}_${randomId}`;
  const email = `${username}@gmail.com`;
  const password = 'Test1234!';

  return {
    username,
    email,
    password
  };
}
