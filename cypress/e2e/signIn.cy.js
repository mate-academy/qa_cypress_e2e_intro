/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {

  });
    const username = 'oleksandra_zen'
    const email = 'aaaa@ggg'
    const password = 'qwerty'

    it('should provide an ability to log in', () => {
      cy.visit('https://react-redux.realworld.io')

      cy.contains('a', 'Sign in').click()
      cy.get('.auth-page').should('be.visible')
      cy.get('[placeholder="Email"]').should('be.visible')
      cy.get('[placeholder="Password"]').should('be.visible')
  
      cy.get('[placeholder="Email"]').type(email)
      cy.get('[placeholder="Password"]').type(password)
      cy.get('button[type=submit]').click()
      cy.contains('a', username).should('exist'); 
    });
  });

