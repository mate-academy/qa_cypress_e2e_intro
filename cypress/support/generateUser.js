const faker = require('faker');

function generateUser() {
    const randomNumber = Math.round(Math.random(1000) * 1000);
    const username = `user${randomNumber}`;
    const email = `${username}@gmail.com`;
    const password = 'qqbybon';

    return { username, email, password};
}

module.exports = { generateUser };