const { faker } = require('@faker-js/faker');

function generateUser() {
  const username = faker.person.firstName();
  const email = `${username}@gmail.com`;
  const password = 'test1234';

  return { username, email, password };
}

module.exports = { generateUser };
