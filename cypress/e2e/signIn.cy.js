/// <reference types="cypress" />

describe('Sign in', () => {
  
  it('Should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io')

    cy.contains('Sign in')
    .click();

    cy.get(':nth-child(1) > .form-control')
    .type('user1@mail.com');

    cy.get(':nth-child(2) > .form-control')
    .type('password1');

    cy.contains('.btn', 'Sign in')
    .click();

    cy.get(':nth-child(4) > .nav-link')
    .should('contain', 'demoname')
  })
});
