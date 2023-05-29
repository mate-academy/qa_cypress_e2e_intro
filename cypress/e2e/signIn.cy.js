/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach (() => {
    cy.visit('/')
  });

  it('should provide an ability to log in', () => {
    const username = 'Customer426';
    const email = 'customer426@mail.com';
    const password = 'Password426';

    cy.get(':nth-child(2) > .nav-link')
      .click()
    
    cy.get('h1.text-xs-center')
      .should('contain.text', 'Sign In')

    cy.get('[placeholder="Email"]')
      .type(email)
    
    cy.get('[placeholder="Password"]')
      .type(password)

    cy.contains('.btn', 'Sign in')
      .click()
    
    cy.get(':nth-child(4) > .nav-link')
      .should('contain', username)
  });
});
