const { faker } = require('@faker-js/faker');

function generateUser() {
  const username = `a${faker.internet.userName()}`;
  const email = `${username}@gmail.com`;
  const password = 'Password1234';

  return { username, email, password };
};

module.exports = { generateUser };
