const { faker } = require('@faker-js/faker');

function generateUser() {
  const name = faker.internet.userName();
  const email = faker.internet.email();
  const password = faker.internet.password();

  return { name, email, password };
}

module.exports = { generateUser };
