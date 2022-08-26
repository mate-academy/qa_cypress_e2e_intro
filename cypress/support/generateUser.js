const faker = require('faker');

function generateUser() {
  const random = Math.floor(Math.random(1000) * 1000);
  const userName = faker.internet.userName() + '_' + random;
  const email = faker.internet.email();
  const password = faker.internet.password();

  return { userName, email, password};
}

module.exports = { generateUser };
