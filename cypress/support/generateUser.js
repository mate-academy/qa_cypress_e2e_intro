const { faker } = require('@faker-js/faker');

function generateUser() {
  const userEmail = faker.internet.email();
  const password = 'PasswordTest1234';

  return { userEmail, password };
}

module.exports = { generateUser };
