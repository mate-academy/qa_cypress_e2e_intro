/// <reference types="cypress" />
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
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
  cy.getPlaceHolder('Email').type(email);
  cy.getPlaceHolder('Password').type(password);
});

Cypress.Commands.add('register', (username, email, password) => {
  cy.getPlaceHolder('Username').type(username);
  cy.getPlaceHolder('Email').type(email);
  cy.getPlaceHolder('Password').type(password);
});

// -- This will overwrite an existing command --
Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
  return originalFn('/user' + url, { ...options, timeout: 10000 });
});

Cypress.Commands.add('getPlaceHolder', (placeholder) => {
  cy.get(`[placeholder=${placeholder}]`);
});
