// const { faker } = require('@faker-js/faker');

function generateUser() {
  // const randomNumber = Math.random().toString().slice(2, 6);
  // const userName = faker.internet.userName() + randomNumber;
  // const userName = `Test_user#_${randomNumber}`;
  // const email = faker.internet.email();
  const userName = 'faker.internet.userName';
  const email = `${userName}@example.com`;
  const password = 'Password1234';

  return { userName, email, password };
}

module.exports = { generateUser };
