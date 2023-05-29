/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/')
    cy.contains('Sign in')
    .click();
    cy.get(':nth-child(1) > .form-control')
    .type('condtest@qa.team');
    cy.get(':nth-child(2) > .form-control')
    .type('1234qwer');
    cy.get('.btn')
    .click();
    cy.get('.navbar')
    .should('contain', 'Ivatest');
  });
});
