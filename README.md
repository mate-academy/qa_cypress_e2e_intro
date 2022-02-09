Workflow:
1. Fork the repo.
1. Clone **your** forked repository.
1. Create a new branch `git checkout -b develop`.
1. Resolve tasks in the `cypress`/`integration`/`firstTest.spec.js`.
1. Create a pull request.

## Basic level 

App for testing: `https://react-redux.realworld.io`

**Your task** is to automate the next test case:

1. Visit "Sign in" page
1. Fill login and password fields as valid data
1. Click [Sign In] button
1. Assert your username appeared in "Site navigation (Header)" menu

## Advanced level

App for testing: `https://react-redux.realworld.io`

**Your task** is to automate the next test case:

Write your second test:
1. Go to "Sign Up" page
1. Fill username, email and password fields with `faker` plugin
1. Click on [Sign up] button
1. Assert your username appeared in site navigation (header) menu.

To install `Faker` plugin, run the command: ```npm install faker@5.5.3```.  
To use `Faker` in your tests, go to `support`/`generate.js` file and write the next code:

```js
const faker = require('faker');

function generateUser() {
  const random = Math.random().toString().slice(2, 6);
  const username = faker.internet.userName() + '_' + random;
  const email = `${username}@mail.com`;
  const password = '12345Qwert!';

  return { email, password, username };
}

module.exports = { generateUser };
```

Now, you can generate a new user in your tests:

```js
const { generateUser } = require('../support/generate');

describe('Your Second Test', () => {
  it('Sign up with faker', () => {
    const user = generateUser();
    
    <your_code>
  });
});
```
