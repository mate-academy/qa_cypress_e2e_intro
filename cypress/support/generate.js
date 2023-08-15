// const faker = require('@faker-js/faker');

function generateUser() {
  const random = Math.random().toString().slice(2, 8);
  const username = 'Test-user_' + random;
  const email = `${username}@mail.com`;
  const password = 'Test1234';

  return { email, password, username };
};

module.exports = { generateUser };
