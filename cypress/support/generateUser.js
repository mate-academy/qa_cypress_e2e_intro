const { faker } = require('@faker-js/faker');

function generateUser() {
  const username = faker.internet.userName().replace('.', '').toLowerCase();
  const email = `${username}@gmail.com`.toLowerCase();
  const password = '12345678';

  return {
    username,
    email,
    password,
  };
}

module.exports = { generateUser };
