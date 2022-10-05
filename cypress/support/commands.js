// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const { faker } = require('@faker-js/faker');

Cypress.Commands.add('generateFakeUser', () => {
  cy.wrap({
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  });
});

Cypress.Commands.add('registerNewUserWithForm', (userData) => {
  const user = {
    username: userData?.username ?? faker.internet.userName(),
    email: userData?.email ?? faker.internet.email(),
    password: userData?.password ?? faker.internet.password(),
  };

  cy.visit('#/register').get('form').within(() => {
    cy.get('input')
      .eq(0).type(user.username);
    cy.get('input')
      .eq(1).type(user.email);
    cy.get('input')
      .eq(2).type(user.password).type('{enter}');
  })
  .then(() => user);
});

Cypress.Commands.add('registerNewUserWithRequest', (userData) => {
  const user = {
    username: userData?.username ?? faker.internet.userName(),
    email: userData?.email ?? faker.internet.email(),
    password: userData?.password ?? faker.internet.password(),
  };

  cy.request('POST', Cypress.env('apiUrl') + '/users', { user })
    .then(response => ({ ...response.body.user, ...user }));
});
