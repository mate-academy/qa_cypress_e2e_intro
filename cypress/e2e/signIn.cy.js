/// <reference types="cypress" />

describe('Sign In page', () => {
    beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=6eu1fy')
    })
  
  it('should provide an ability to log in', () => {
    cy.get('[type="email"]')
      .type('testingcypr@gmail.com');
    
    cy.get('[type="password"]')
      .type('testingcypr');
    
    cy.get('[class="btn btn-lg btn-primary pull-xs-right"]')
      .click();
    
    cy.get('[class="nav-link"]')
      .should('contain', 'testingcypr');
  });
});
