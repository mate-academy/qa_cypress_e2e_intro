function generateUser() {
  const timestamp = new Date().getTime();
  const username = 'AnS_' + timestamp;
  // Генеруємо складний пароль: великі/малі літери, цифри, спецсимволи
  const password = `P@ssw0rd${timestamp}!`; // Приклад складного пароля
  const email = username + '@test.ua';

  return { username, email, password };
}

module.exports = generateUser;
