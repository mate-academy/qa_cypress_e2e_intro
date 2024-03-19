/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('Should provide an ability to log in', () => {
    
    cy.contains('a', 'Sign in')
     .should('exist')
     .click()

     cy.url()
      .should('include', '/login');

    cy.get('h1')
     .should('contain.text', 'Sign In')

    cy.contains('a', 'Need an account?')
     .should('exist')
    
    cy.get('[placeholder=Email]')
     .should('exist')
     .type('wiwoxuh@mailinator.com')

    cy.get('[placeholder=Password]')
     .should('exist')
     .type('Password@1')

    cy.get('button[type="submit"]')
     .should('exist')
     .click()

    cy.get('[class="navbar navbar-light"]')
     .last()
     .should('contain.text', 'Libero')
  });
});
