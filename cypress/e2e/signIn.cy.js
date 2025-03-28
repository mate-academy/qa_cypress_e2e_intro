/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('/');
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get(':nth-child(1) > .form-control').type ('obi@test.qa');
    cy.get(':nth-child(2) > .form-control').type ('Qwerty!1');
    cy.get('.btn').click();
    cy.get('.nav-link').should('contain.text', 'obi1');
    
  });
});

