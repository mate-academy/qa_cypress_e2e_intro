import { faker } from '@faker-js/faker';
function generateUser(){
  const randomNumber = Math.random().toString().slice(2, 6)
  const username = faker.internet.userName() + '_' + randomNumber
  const email = `${username}@gmail.com`
  const password = 'Test1234'

  return {email, username, password};
}
module.exports = {generateUser};