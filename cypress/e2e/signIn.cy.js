/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/')
    
    cy.contains('Sign in').click();

    cy.get('[placeholder=Email]')
      .type('a7663fold@gmail.com');
    
    cy.get('[placeholder=Password]')
      .type('Test1234');
    
    cy.get('.btn').click();
    
    cy.contains('a', 'ave7fold');
  });
});
