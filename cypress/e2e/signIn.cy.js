/// <reference types="cypress" />

const { generateRandomString } = require('../support/commands');

describe('Sign In page',
  {
    defaultBrowser: 'chrome',
    viewportHeight: 900,
    viewportWidth: 1200,
    scrollBehavior: 'center'
  },
  () => {
    before(() => {
      cy.visit('/#/login');
    });

    it('should provide an ability to log in', () => {
      const username = generateRandomString(8, '', true, false);
      const email = generateRandomString(7, '', false, false) + '@gmail.com';
      const password = generateRandomString(10, '%$', true, true);
      let createdUser;

      cy.request({
        method: 'Post',
        url: 'https://conduit.mate.academy/api/users',
        body: {
          user: {
            username,
            email,
            password
          }
        }
      })
        .then((response) => {
          createdUser = { ...response.body.user };
          cy.get('[placeholder="Email"]')
            .type(email);
          cy.get('[placeholder="Password"]')
            .type(password);
          cy.get('form button[type="submit"]')
            .click();
          cy.location('hash')
            .should('equal', '#/');
          cy.get('.nav-link[href*="/profile/"]')
            .should((user) => {
              const displayedUsernameOnPage = user[0].getAttribute('href');
              const createdUsername = createdUser.username;

              expect(displayedUsernameOnPage).to.include(createdUsername);
            });
        });
    });
  }
);
