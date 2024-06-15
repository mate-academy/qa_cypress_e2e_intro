/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io')

    cy.get('a')
      .contains('Sign in')
      .click()

    cy.get('h1.text-xs-center')
      .should('contain', 'Sign In')

    cy.get(':nth-child(1) > .form-control')
      .type('user@user.ua')

    cy.get(':nth-child(2) > .form-control')
      .type('user')

    cy.get('.btn')
      .click()

    cy.get('nav')
      .should('contain', 'Test Userrr')

  });
});
