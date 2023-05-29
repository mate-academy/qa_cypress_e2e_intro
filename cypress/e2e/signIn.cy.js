/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit({url:'https://react-redux.realworld.io/', method:'GET'})
    
    cy.contains('Sign in')
    .click();
    
    cy.get('h1')
    .should('contain.text', 'Sign In')
    
    cy.get(':nth-child(1) > .form-control')
    .type('condtest@qa.team');
    
    cy.get(':nth-child(2) > .form-control')
    .type('1234qwer');
    
    cy.get('.btn')
    .click();
    
    cy.get('.navbar')
    .should('contain', 'Ivatest');
  });
});
