const {
  faker
} = require('@faker-js/faker');

function generateUser() {
  const randomNumber = Math.random().toString().slice(2, 6);
  const userName = (faker.internet.userName() + randomNumber).toLowerCase();
  const email = userName + '@mail.com';
  const password = 'Testpassword765$';

  return {
    userName,
    email,
    password
  };
}

module.exports = { generateUser };
