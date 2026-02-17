const { faker } = require('@faker-js/faker');

function generateUser() {
  const base = faker.internet.userName().replace(/[^a-zA-Z0-9_-]/g, '').toLowerCase();
  const randomNumber = Math.random().toString().slice(2, 6);
  const username = base + randomNumber;
  const email = `${username}@gmail.com`;
  const password = 'Test1234';

  return { username, email, password };
}

module.exports = {
  generateUser
};
