/// <reference types="cypress" />

describe('Sign In page', () => {
  const email =  'kukug@mailinator.com'
  const password = 'Pa$$w0rd!'

  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io')
    
    cy.contains('a', 'Sign in').click()
    cy.get('.auth-page').should('be.visible')
    cy.get('[placeholder="Email"]').should('be.visible')
    cy.get('[placeholder="Password"]').should('be.visible')

    cy.get('[placeholder="Email"]').type(email)
    cy.get('[placeholder="Password"]').type(password)
    cy.get('button[type=submit]').click()
    
    cy.get('.article-preview').should('be.visible')
    cy.get(':nth-child(4) > .nav-link').should('be.visible').contains('kuku1')
  });
});
