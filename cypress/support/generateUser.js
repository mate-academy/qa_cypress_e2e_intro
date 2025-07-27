import { faker } from '@faker-js/faker';

function generateUser() {
  const randomNumber = Math.random().toString().slice(2, 6);
  const username = faker.internet.userName().split('.')[0];
  const email = `${username.toLowerCase() + randomNumber}@gmail.com`;
  const password = `Test1234@Test1234@!!!!`;
  return { username, email, password };
}

export { generateUser };
