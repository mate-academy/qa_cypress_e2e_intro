/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=6eu1fy')
  })

  it('should contain all parts', () => {
    cy.get('h1')
      .should('contain.text', 'Sign In')

    cy.contains('a', 'Need an account?')
      .should('exist')

    cy.contains('.btn', 'Sign in')
      .should('exist')
  });

  it('should provide an ability to log in', () => {
    cy.get('[placeholder="Email"]') // Email field
      .type('test08@gmail.com')

    cy.get('[placeholder="Password"]') // Password field
      .type('12345')

    cy.contains('.btn', 'Sign in')
      .click();

    cy.contains('a', 'test08')
      .should('exist')
  });
});
