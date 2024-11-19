/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=zczlgv');
    cy.get(':nth-child(1) > .form-control')
      .type('lurudosu@mailinator.com');
    cy.get(':nth-child(2) > .form-control')
      .type('Pa$$w0rd!');
    cy.contains('.btn', 'Sign in')
      .click();
    cy.get(':nth-child(4) > .nav-link')
      .should('contain', 'Consequat Dolores d');
  });
});
