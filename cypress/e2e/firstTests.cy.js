// <reference types="cypress" />

describe('First test basic', () => {
  it('Sign in', () => {
    cy.visit('https://react-redux.realworld.io/#/login')
      .get('h1')
      .should('contain.text', 'Sign In');

    cy.get(':nth-child(1) > .form-control')
      .type('test_user@mail.com')

    cy.get(':nth-child(2) > .form-control')
      .type('test1234')

    cy.contains('.btn', 'Sign in')
      .click()

    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', 'test_user1234')
  });
});