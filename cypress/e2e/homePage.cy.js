/// <reference types="cypress" />

describe('Home page', () => {
  beforeEach('go to', () => {
    cy.visit('/')
  })

  it('should provide an ability to log in', () => {
    cy.get('h1')
      .should('contain.text', 'conduit');

    cy.contains('a', 'Sign in')
      .click()

    cy.url()
      .should('include', '/login')

    cy.contains('a', 'Sign up')
      .click()

    cy.url()
      .should('include', '/register')
  });
});
