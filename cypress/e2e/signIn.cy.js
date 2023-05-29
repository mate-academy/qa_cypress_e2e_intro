/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=6yurh8')
  })

  it('should provide an ability to log in', () => {
    cy.get(':nth-child(1) > .form-control')
      .type('angelinas@mate.com')

    cy.get(':nth-child(2) > .form-control')
      .type('123456')

    cy.get('.btn')
      .click()
    
    cy.contains(':nth-child(4) > .nav-link','angelina')

  });
});
