const { faker } = require('@faker-js/faker');

function generateUser() {
  const username = faker.person.firstName().toLowerCase();
  const email = faker.internet.email().toLowerCase();
  const password = faker.internet.password();

  return { username, email, password };
}

module.exports = { generateUser };
