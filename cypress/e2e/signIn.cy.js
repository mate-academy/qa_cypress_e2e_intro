/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io');

    cy.get(':nth-child(2) > .nav-link')
      .should('contain', 'Sign in')
      .click();

    cy.get('h1.text-xs-center')
      .should('contain', 'Sign In');

    cy.get(':nth-child(1) > .form-control')
      .type('sa23qa@gmail.com');

    cy.get(':nth-child(2) > .form-control')
      .type('sa23qa');

    cy.get('.btn')
      .should('contain', 'Sign in')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain', 'sa23qa');
  });
});
