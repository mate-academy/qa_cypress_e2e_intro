function generateUser() {
  const randomNumber = Math.floor(Math.random() * 100000);
  const randomNumber2 = Math.floor(Math.random() * 1000);
  const userName = `tester_number${randomNumber}`;
  const email = `${userName}@gmail.com`;
  const password = randomNumber + randomNumber2;

  return { userName, email, password };
}

module.exports = { generateUser };
