import { faker } from "@faker-js/faker";

function generateUser() {
  const username = faker.internet.userName();
  const email = username.toLowerCase() + "@gmail.com";
  const password = "12345Qwert!";

  return { username, email, password };
}

module.exports = { generateUser };
