/// <reference types="cypress" />

const baseUrl = 'https://react-redux.realworld.io';

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit(baseUrl);

    cy.contains('Sign in')
    .click();
    
    cy.get('[type = email]')
    .type('123qwe@mail.com');

    cy.get('[type = password]')
    .type('passpass');

    cy.get('[type = submit]')
    .click();
    
    cy.get('[class = "nav-link active"]')
    .should('contains.text', 'Your Feed');
  }
  
  );
});
