/// <reference types="cypress" />

const { type } = require("os");

describe('Sign In page', () => {
  const email = 'vyno@mailinator.com';
  const password = '1q2w3e4R!';

  it('should provide an ability to log in', () => {
    cy.visit('/#/');
  
    cy.get(':nth-child(2) > .nav-link')
      .should('contain.text', 'Sign in')
      .click();
    
    cy.get(':nth-child(1) > .form-control')
      .type(email);
    
    cy.get(':nth-child(2) > .form-control')
      .type(password);
    
    cy.get('.btn')
      .should('contain', 'Sign in')
      .click();
    
    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', 'Proident')
  });
});
