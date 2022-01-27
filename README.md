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
To use `Faker` in your tests, go to `plugins`/`index.js` file and paste it:

```js
const faker = require('faker');

module.exports = (on, config) => {
    on('task', {
        freshUser() {
            const random = Math.round(Math.random() * 1000000);

            return {
                username: faker.name.firstName() + random,
                email: `test_${random}@mail.com`,
                password: '12345Qwert!',
            };
        },
    });
};
```

Now, you can write your tests:

```js
let user;

describe('Your Second Test', () => {
    before(function () {
        cy.task("freshUser").then((freshUser) => {
            user = freshUser;
        });
    });

    it('Sign up with faker', () => {
      <your_code>
    })
  })
```
