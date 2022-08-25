import { faker } from '@faker-js/faker';

function generateUser() {
  const randomNumber = Math.random().toString().slice(2, 6);
  const userName = faker.internet.userName() + '_' + randomNumber;
  const userEmail = `${userName}@mail.com`;
  const userPassword = faker.internet.password();

  return { userEmail, userPassword, userName }
}

module.exports = { generateUser }