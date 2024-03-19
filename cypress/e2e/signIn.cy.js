/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should provide an ability to log in', () => {
    
    cy.contains('a', 'Sign in')
     .click()

     cy.url()
      .should('include', '/login');

    cy.get('h1')
     .should('contain.text', 'Sign In')
    
    cy.get('[placeholder=Email]')
     .type('wiwoxuh@mailinator.com')

    cy.get('[placeholder=Password]')
     .type('Password@1')

    cy.get('button[type="submit"]')
     .should('exist')
     .click()

    cy.get('[class="navbar navbar-light"]')
     .last()
     .should('contain.text', 'Libero')
  });
});
