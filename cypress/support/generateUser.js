const { faker } = require("@faker-js/faker");

function generateUser() {
  const randomNumber = Math.random().toString().slice(2, 4);
  const username = faker.internet.userName() + randomNumber;
  const email = `${username}@gmail.com`;
  const password = 'Test!123';

  return { username, email, password };
}

module.exports = { generateUser };