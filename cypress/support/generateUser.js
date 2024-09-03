import { faker } from '@faker-js/faker';

export const generateUser = () => {
  const randomNumbers = String(Math.random()).slice(2, 6);

  // Username cannot contain a dot "."
  const username = (faker
    .internet
    .userName()
    .toLowerCase()
  ).replace('.', '') + randomNumbers;

  return {
    email: username + '@email.com',
    username,
    password: faker.internet.password()
  };
};
