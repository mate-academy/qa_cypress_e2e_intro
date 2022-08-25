/// <reference types="cypress" />

describe('Basic level', () => {
  const userName = 'testest22';
  const userEmail = 'testest22@mail.com';
  const userPassword = 'testest22';

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
      .type(userEmail)

    cy.get(':nth-child(2) > .form-control')
      .type(userPassword)

    cy.contains('.btn', 'Sign in')
      .should('exist')
      .click()
  });

  it('should display username in navigation header', () => {
    cy.contains(':nth-child(4) > .nav-link', `${userName}`)
      .should('exist')
  });
});
