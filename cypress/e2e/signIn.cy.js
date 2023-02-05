/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io')
  });
  
  it('should provide an ability to log in', () => {
    cy.get(':nth-child(2) > .nav-link')
      .should('contain.text', 'Sign in')
      .click();

    cy.url()
      .should('include', '/login');

    cy.get('[placeholder="Email"]')
      .type('tester393@mail.com');

    cy.get('[placeholder="Password"]')
      .type('Tester333');

    cy.contains('.btn', 'Sign in')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should("contain.text", 'tester393');
  });
});
