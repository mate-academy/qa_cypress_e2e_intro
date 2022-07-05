import { faker } from '@faker-js/faker';
//const faker = require('@faker-js/faker');

function generateUser() {
  const random = Math.random().toString().slice(2, 6);
  const username = faker.name.findName();
  const email = faker.internet.email();
  const password = '12345Qwert!';

  return { email, password, username };
}

module.exports = { generateUser };