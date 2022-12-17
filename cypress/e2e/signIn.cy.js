/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io')
    cy.get(':nth-child(2) > .nav-link').click();

    cy.get(':nth-child(1) > .form-control').type('testing9@qa.team');
    cy.get(':nth-child(2) > .form-control').type('testing1234!');

    cy.get('.btn').should('contain', 'Sign in').click();
    cy.get(':nth-child(4) > .nav-link').should('contain', 'testing9')
  });
});
