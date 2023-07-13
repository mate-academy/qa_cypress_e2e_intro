/// <reference types="cypress" />
describe('Sign In Test', () => {
  it('should sign in successfully and verify username', () => {
        cy.visit('https://react-redux.realworld.io/#/login');

        cy.get('input[type="email"]').type('shakirashakira11@qa.team');
    cy.get('input[type="password"]').type('qwerty12345');

    cy.contains('button', 'Sign in').click();
    
    cy.get('.nav-link').should('contain', 'Shakirashakira');
  });
});