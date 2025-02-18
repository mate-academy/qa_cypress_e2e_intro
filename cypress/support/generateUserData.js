const { faker } = require('@faker-js/faker');

export default function generateUserData() {
  const randomNumber = Math.random().toString().slice(2, 8);
  const username = `${faker.person.firstName()}_${randomNumber}`;
  const email = (faker.internet.email()).toLowerCase();
  const password = faker.internet.password();

  return { username, email, password };
};
