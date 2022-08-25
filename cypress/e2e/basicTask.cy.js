/// <reference types="cypress" />

describe('Basic level', () => {
  it('should go to the Sign In page', () => {
    cy.visit('https://react-redux.realworld.io')

    cy.contains('.nav-link', 'Sign in')
      .should('exist')
      .click()

    cy.url()
      .should('include', '/login')
  })

  it('shoud login user', () => {
    cy.get(':nth-child(1) > .form-control')
      .type('testest22@mail.com')

    cy.get(':nth-child(2) > .form-control')
      .type('testest22')

    cy.contains('.btn', 'Sign in')
      .should('exist')
      .click()
  });
});
