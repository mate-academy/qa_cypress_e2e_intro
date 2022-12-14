/// <reference types="cypress" />
describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/');
    
    cy.get(':nth-child(2) > .nav-link').click();
   
    cy.url().should('include', '/login');
    cy.get('h1.text-xs-center');

    cy.get(':nth-child(1) > .form-control').type('magic@qa.team');
    cy.get(':nth-child(2) > .form-control').type('Patronus1!');
    cy.get('.btn').should('contain', 'Sign in').click();

    cy.get(':nth-child(4) > .nav-link').should('contain', 'albusdumbledore');
  });
});