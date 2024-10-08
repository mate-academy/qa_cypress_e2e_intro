/// <reference types="cypress" />

Cypress.on('uncaught:exception', () => {
  return false;
});

describe('Sign In page', () => {
  it('should sign in with valid credentials', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=v4rj40');

    cy.get('input[placeholder="Email"]')
      .type('vivivi145@gmail.con');

    cy.get('input[placeholder="Password"]')
      .type('test12345');

    cy.get('button[type="submit"]').should('have.text', 'Sign in').click();

    cy.contains('a', 'vivivi')
      .should('exist');
  });
});
