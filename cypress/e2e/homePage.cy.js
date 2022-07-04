/// <reference types="cypress" />

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/')

     cy.get('h1')
      .should('contain.text', 'conduit');
  });

  it('should open sign in page', () => {
    cy.contains('a', 'Sign in')
      .should('exist')
      .click();
    
    cy.url()
      .should('include', '/login');
    
    cy.get('h1')
      .should('contain.text', 'Sign In')
  });

   it('should open sign up page', () => { 
    cy.contains('a', 'Sign up')
      .should('exist')
      .click();
    
    cy.url()
      .should('include', '/register');
    
    cy.get('h1')
     .should('contain.text', 'Sign Up')
  })
})