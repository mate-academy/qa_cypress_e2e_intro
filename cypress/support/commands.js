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

// const { generateUser } = require('./generateUser');

// Cypress.Commands.add('clickSignButton', (text) => {
//   cy.get('.nav-link').contains(text)
//     .click();
// });

// Cypress.Commands.add('registerUser', () => {
//   const user = generateUser();
//   cy.request(
//     {
//       method: 'POST',
//       url: 'https://api.realworld.io/api/users',
//       failOnStatusCode: false
//     },
//     {
//       user: {
//         username: user.userName,
//         email: user.email,
//         password: user.password
//       }

//     }
//   );
//   return cy.wrap(user);
// });

// Cypress.Commands.add('loginUser', () => {
//   const user = generateUser();
//   cy.request({
//     method: 'POST',
//     failOnStatusCode: false,
//     url: 'https://conduit.productionready.io/api/users/login',
//     body: {
//       user: {
//         email: user.email,
//         password: user.password
//       }
//     }
//   });

//   return cy.wrap(user);
// });
Cypress.Commands.add('findByPlaceholder', (text) => {
  return cy.get(`input[placeholder="${text}"]`);
});

// eslint-disable-next-line max-len, no-console
Cypress.on('uncaught:exception', (err) => { console.error(err); return false; });
Cypress.Commands.add('assertPageUrl', (url) => {
  cy.url().should('equal', Cypress.config().baseUrl + url);
});
