/// <reference types="cypress" />


describe('Sign In Flow', () => {
  it('Should sign in successfully', () => {
    cy.visit('https://react-redux.realworld.io/#/login'); 
    
    cy.get('input[type="email"]').type('Anton3108@mail.com');
    cy.get('input[type="password"]').type('A12345678a'); 
    
    cy.contains('button', 'Sign in').click(); 
    
    cy.get('nav').contains('a', 'Anton3108').should('be.visible');

  });
});
