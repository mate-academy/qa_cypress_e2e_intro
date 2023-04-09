/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login')

    cy.get('[placeholder="Email"]')
      .type('random123@gmail.com');

    cy.get('[placeholder="Password"]') 
      .type('1234');
      
    cy.contains('.btn', 'Sign in')
      .click();

    cy.get ('.navbar')  
      .should('contain.text', 'cypress9')
  });
});
