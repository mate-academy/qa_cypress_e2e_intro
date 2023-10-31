/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/');

    cy.contains('a', 'Sign in').click();

    cy.get(':nth-child(1) > .form-control')
      .type('heqynypifu@mailinator.com');

    cy.get(':nth-child(2) > .form-control')
      .type('Pa$$w0rd!');

    cy.get('.btn')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain', 'Nostrud quisquam eaq');
  });
});
