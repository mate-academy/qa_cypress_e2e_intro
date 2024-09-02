import { faker } from '@faker-js/faker';

export const generateUser = () => {
  const salt = String(Math.random()).slice(2, 6);
  const username = (faker
    .internet
    .userName()
    .toLowerCase()
  ) + salt;

  return {
    email: username + '@email.com',
    username,
    password: faker.internet.password()
  };
};
