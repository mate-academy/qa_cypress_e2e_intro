/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.include('of undefined')
        done()
        return false
      });

    const username = 'mamkintester';
    const email = `${username}@gmail.com`;
    const password = '1q2w3e4R!'

    cy.visit('/')

    cy.get('.nav-link')
      .contains('Sign in')
      .click()

    cy.get('[placeholder="Email"]')
      .type(email)
    cy.get('[placeholder="Password"]')
      .type(password)
    cy.get('[type="submit"]')
      .contains('Sign in')
      .click()
    
    cy.contains('.nav-link', username)
      .should('be.visible')
  });
});
