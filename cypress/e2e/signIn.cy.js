/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io');
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get(':nth-child(1) > .form-control').type('diana55@68.qa');
    cy.get(':nth-child(2) > .form-control').type('Diana5568!');
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link').should('contain', 'Diana5568');
  });
});
