/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should provide an ability to log in', () => {
    cy.contains('.nav-link', 'Sign in')
      .click();
    cy.get('[placeholder="Email"]')
      .type('xewr@mailinator.com');
    cy.get('[placeholder="Password"]')
      .type('9{!XxNeN$XDLkro.$');
    cy.contains('[type="submit"]', 'Sign in')
      .click();
    cy.get('.nav-link')
      .should('contain.text', 'Nihiledomn');
  });
});
