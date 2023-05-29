function generateUser(){
    const randomNumber = Math.random().toString().slice(2)
    const username = 'TestUser' + randomNumber;
    const email = username + '@qa.team';
    const password = 'Qwerty!123'

    return {username, email, password};
}

module.exports = { generateUser };