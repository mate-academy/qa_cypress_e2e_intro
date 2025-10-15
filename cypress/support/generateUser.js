const { faker } = require('@faker-js/faker');

function generateUser() {
  const randomNumber = String(Math.random()).slice(2, 6);
  const userName = faker.internet.userName().replace(/\W/, '') + randomNumber;
  const email = userName + '@mail.com';
  const password = 'Test1234!';

  return {
    userName,
    email,
    password
  };
}

module.exports = { generateUser };
