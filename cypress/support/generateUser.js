const { faker } = require('@faker-js/faker');

function generateUser() {
  const username = faker.internet.userName();
  const email = faker.internet.email();
  const password = faker.internet.password();

  return { username, email, password };
}

module.exports = { generateUser };
