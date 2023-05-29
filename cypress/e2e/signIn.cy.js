/// <reference types="cypress" />


describe('Homework task', () => {
  before(() => {
    cy.visit('https://react-redux.realworld.io');
  });

  it('Sign in user', () => {
    cy.get(':nth-child(2) > .nav-link')
    .click ();
    cy.contains('h1', 'Sign In')
    .should('be.visible');
    cy.url()
    .should('include', 'login');
    cy.get(':nth-child(1) > .form-control')
    .type('user_den555@gmail.com');
    cy.get(':nth-child(2) > .form-control')
    .type('Qwert!23');
    cy.get('.btn')
    .click();
    cy.get(':nth-child(4) > .nav-link')
    .should('contain', 'user_den555');
});
});
