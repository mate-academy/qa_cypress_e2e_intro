/// <reference types="cypress" />

describe('Sign In page', () => {
  it('The user should be able to log in', () => {
    cy.visit('https://react-redux.realworld.io')

    cy.contains('a', 'Sign in')
      .click()

    cy.contains('h1.text-xs-center', 'Sign In')

    cy.get(':nth-child(1) > .form-control')
      .type('user@user.ua')

    cy.get(':nth-child(2) > .form-control')
      .type('user')

    cy.get('.btn')
      .click()

    cy.get('nav')
      .contains('Test Userrr')
  });
});
