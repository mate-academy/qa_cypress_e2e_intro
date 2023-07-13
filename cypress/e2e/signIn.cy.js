/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    
    cy.visit("/");
    cy.get(':nth-child(2) > .nav-link')
      .click();
    cy.get(':nth-child(1) > .form-control')
      .type("test111u@gmail.com");
    cy.get(':nth-child(2) > .form-control')
      .type("Password1");
    cy.get('.btn')
      .click();
      cy.get(':nth-child(4) > .nav-link')
      .should('contain', 'test111u');  
  });
});
