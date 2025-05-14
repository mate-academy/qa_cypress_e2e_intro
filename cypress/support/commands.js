const { faker } = require('@faker-js/faker');

function createRandomUser() {
  return {
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    password: faker.internet.password()
  };
}

module.exports = {
  createRandomUser
};
