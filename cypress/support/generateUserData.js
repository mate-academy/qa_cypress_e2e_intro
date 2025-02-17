const { faker } = require('@faker-js/faker');

export default function generateUserData() {
  const randomNumber = Math.random().toString().slice(2, 8);
  const username = `${faker.internet.userName()}${randomNumber}`;
  const email = faker.internet.email();
  const password = faker.internet.password();

  return { username, email, password };
};
