/// <reference types="cypress" />

describe('Sign In page', () => {
  before(() => {
    cy.visit('https://react-redux.realworld.io');
  });

  it('should provide an ability to log in', () => {
    cy.get('.nav-link').contains('Sign in')
      .click();
    cy.url().should('include', 'login');
    cy.get('input[type="email"]')
      .type('Testuser901@mail.com');
    cy.get('input[type="password"]')
      .type('Testuser901');
    cy.get('.btn')
      .click();
    cy.get('.nav-link')
      .contains('Testuser901');
  });
});

// Username: Testuser901
// Email: Testuser901@mail.com
// Password: Testuser901
