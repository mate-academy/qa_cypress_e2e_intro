/// <reference types="cypress" />

describe('Cypress first homework', () => {
  it('Sign In', () => {
    cy.visit('/')
    
    cy.contains('a','Sign in')
     .click();

     cy.url()
     .should('include', '/login');

     cy.get(':nth-child(1) > .form-control')
     .type('accounttest1@g.com');

     cy.get(':nth-child(2) > .form-control')
     .type('12345');

     cy.contains('.btn', 'Sign in')
     .click();

     cy.contains('a', 'testaccount11')
  });
});
