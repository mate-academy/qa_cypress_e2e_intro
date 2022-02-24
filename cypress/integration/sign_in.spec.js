/// <reference types="cypress" />

describe('Sign in page', () => {
  it('successful login', () => {
    cy.visit('/');

    cy.contains('Sign in')
      .click();

    cy.url()
      .should('include', '/login');
    
    cy.get(':nth-child(1) > .form-control')
      .type('vodo@mailinator.com');
    
    cy.get(':nth-child(2) > .form-control')
      .type('password{enter}');

    cy.get(':nth-child(4) > .nav-link')
      .should('contain', 'DistinctioAtquis31');
  });
});
