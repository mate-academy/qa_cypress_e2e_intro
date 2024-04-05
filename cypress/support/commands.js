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

Cypress.Commands.add('registerNewUser', () => {
  const randomNumber = Math.random().toString().slice(2);
  const username = 'AnS_' + randomNumber;
  const email = username + '@test.ua';
  const password = '654321';

  cy.request('POST', 'https://conduit.productionready.io/api/users', {
    user: { username, email, password }
  }).then((response) => ({ ...response.body.user, password }));
});

Cypress.Commands.add('getByPlaceholder', (placeholderName) => {
  cy.get(`[placeholder=${placeholderName}]`);
});
