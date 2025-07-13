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

const generateUser = require('./generateUser');

// Створюємо користувача через API
Cypress.Commands.add('registerNewUser', () => {
  const { username, email, password } = generateUser();

  return cy.request('POST', 'https://conduit.mate.academy/api/users', {
    user: { username, email, password }
  }).then((response) => {
    expect(response.status).to.eq(200);
    return { username, email, password };
  });
});

// Зручний get за placeholder
Cypress.Commands.add('getByPlaceholder', (placeholder) => {
  return cy.get(`[placeholder="${placeholder}"]`);
});
