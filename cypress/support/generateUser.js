function generateUser() {
  const randomNumber = Math.random().toString().slice(2, 6);
  const userName = `user_${randomNumber}`;
  const email = `${userName}@gmail.com`;
  const password = 'Test1234';

  return {
    userName,
    email,
    password
  };
}

module.exports = {
  generateUser
};
