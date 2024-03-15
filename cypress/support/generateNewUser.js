function generateNewUser() {
  const random = Math.random().toString().slice(2, 6)
  const username = `anton${random}_test`
  const email = `${username}@gmail.com`
  const password = 'Qwerrty_1234'


  return { username, email, password }
}

module.exports = { generateNewUser }