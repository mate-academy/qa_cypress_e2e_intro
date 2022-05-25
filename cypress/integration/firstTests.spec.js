/// <reference types="cypress" />

describe('Sign in form', () => {
  it('should allow to login', () => {
    cy.visit('/');

    cy.get(':nth-child(2) > .nav-link')
      .click();

    cy.url()
      .should('include', '/login?');

    cy.get(':nth-child(1) > .form-control')
      .type('robert1@mail.com')
      .should('have.value', 'robert1@mail.com');
      
    cy.get(':nth-child(2) > .form-control')
      .type('123456')
      .should('have.value', '123456');

    cy.get('.btn')
      .click();
    
    cy.get(':nth-child(4) > .nav-link')
      .contains('robert111')

    

  });
});
