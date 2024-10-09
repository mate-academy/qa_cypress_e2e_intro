/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {

    cy.visit('https://conduit.mate.academy/#/login');

    cy.get('input[type="email"]').type('miretta2@ukr.net');
    cy.get('input[type="password"]').type('Miretta29+');
  
    cy.get('button[type="submit"]').click();
    
    cy.get('.navbar').should('contain', 'miretta2'); 
  });
});
