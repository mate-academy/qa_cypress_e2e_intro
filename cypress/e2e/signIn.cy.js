/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login')

    cy.get(':nth-child(1) > .form-control')
      .type('kakashi@sen.sei')

    cy.get(':nth-child(2) > .form-control')
      .type('qwerty123')

    cy.contains('.btn', 'Sign in')
      .click()

      cy.contains(':nth-child(4) > .nav-link', 'Kakashi')
  });
});
