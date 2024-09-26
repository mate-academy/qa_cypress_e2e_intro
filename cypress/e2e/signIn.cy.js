/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io');
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get(':nth-child(1) > .form-control').type('mahda7979@yahoo.com');
    cy.get(':nth-child(2) > .form-control').type('mahda1122');
    cy.get('.btn').click();
    cy.get('.navbar').should('contain', 'aneta1113333')
  });
});
