/// <reference types="cypress" />

describe('Sign In page', () => {  
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login')
    cy.get('[type="email"]')
      .type('nomatterwhat@test.com');
    cy.get('[type="password"]')
      .type('nomatterwhat');
    cy.get('.btn')
       .click();
    cy.get('.nav-link')
       .should('contain.text', 'Nomatterwhat');
  });
});
