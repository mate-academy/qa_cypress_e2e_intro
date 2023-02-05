/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login')
      .get(':nth-child(1) > .form-control')
      .type('adiposico22@mailinator.com')

    cy.get(':nth-child(2) > .form-control')
      .type('Passw)rd!')

    cy.contains('.btn', 'Sign in')
      .click();

    cy.get('.navbar')
      .should('contain.text', 'Adiposico22');
  });
});
