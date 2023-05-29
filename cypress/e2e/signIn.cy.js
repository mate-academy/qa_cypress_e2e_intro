/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login')
  });

  it(('should allow to log in'), () =>{
    cy.url()
      .should('include', '/login')

    cy.get('h1')
      .should('contain.text', 'Sign In')

    cy.get('[placeholder="Email"]') 
    .type('testuser500@gmail.com')

    cy.get('[placeholder="Password"]')
      .type('12345Aa$')

    cy.contains('.btn', 'Sign in')
      .click()

    cy.get('.navbar')
      .should('contain', 'testuser500')
  })

});
