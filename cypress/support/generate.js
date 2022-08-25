const faker = require('faker');

function generateUser() {
  const random = Math.random().toString().slice(2, 6);
  const username = faker.internet.userName() + '_' + random;
  const email = `${username}@mail.com`;
  const password = '12345Qwert!';
  const words = faker.lorem.words();
  const futureDate = faker.date.future().toString().slice(0,21);
  const jobArea = faker.name.jobArea();
  const weekday = faker.date.weekday();

  return { email, password, username, words, futureDate, jobArea, weekday };
}

module.exports = { generateUser };