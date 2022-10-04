/// <reference types="cypress" />

describe('Sign in', () => {
  it('should', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=x0c8jj')

    cy.get(':nth-child(1) > .form-control')
    .type('almond@ukr.net')
    
    cy.get(':nth-child(2) > .form-control')
    .type('123456')

    cy.contains('.btn', 'Sign in')
    .click()

    cy.contains(':nth-child(4) > .nav-link', 'almond')
  });

});
