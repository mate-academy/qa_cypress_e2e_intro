/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io');

    cy.get('.navbar').contains('Sign in').click();

    cy.get('[placeholder=Email]')
      .type('test_qa@qa.team');

    cy.get('[placeholder=Password]')
      .type('Qwe12345');

    cy.get('.btn').contains('Sign in').click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', 'chendler');
  });
});
