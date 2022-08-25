function generateUser() {
  const random = Math.random().toString().slice(2, 6);
  const username = `username${random}`;
  const email = `${username}@mail.com`;
  const password = '12345Qwert!';

  return { email, password, username };
}

module.exports = { generateUser };
