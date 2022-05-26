/// <reference types="cypress" />

describe('Sign in form', () => {
  it('should allow to log in', () => {
    cy.visit('/');

    cy.get(':nth-child(2) > .nav-link')
      .click();

    cy.url()
      .should('include', '/login');

    cy.get(':nth-child(1) > .form-control')
      .type('UserTesterovych@mail.com')
      .should('have.value', 'UserTesterovych@mail.com')

    cy.get(':nth-child(2) > .form-control')
      .type('Pa$$word1')
      .should('have.value', 'Pa$$word1')
      
    cy.get('.btn')
      .contains('Sign in')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain', 'UserTesterovych');
  });
});