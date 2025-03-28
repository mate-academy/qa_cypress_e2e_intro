/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io');
  });
  it('should provide an ability to log in', () => {
    cy.contains('Sign in').click();
    cy.url().should('include', '/login');

    cy.get(':nth-child(1) > .form-control')
      .type('liza1234567890@gmail.com');

    cy.get(':nth-child(2) > .form-control')
      .type('liza1234567890');

    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', 'liza1234567890');
  });
});
