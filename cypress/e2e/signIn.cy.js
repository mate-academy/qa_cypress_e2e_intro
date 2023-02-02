/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login');

    cy.get('[placeholder="Email"]')
      .type('testUser123@gmail.com');
    
    cy.get('[placeholder="Password"]')
      .type('testUser123!')
    
    cy.contains('.btn', 'Sign in')
      .click();
    
    cy.contains('.nav-link', 'testUser123!');
  });
});
