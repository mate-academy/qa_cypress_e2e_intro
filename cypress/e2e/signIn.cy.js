/// <reference types="cypress" />

describe('Sign In', () => {
  const username = 'TestName';
  before(() => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=uurats');
  });

  it('should Log in an existing user', () => {
    cy.get('[placeholder="Email"]').type(username + '@gmail.com');
    cy.get('[placeholder="Password"]').type('Aa12345!');
    cy.get('[type="submit"]').click();
    cy.get(':nth-child(4) > .nav-link').should('contain.text', username);
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });
});
