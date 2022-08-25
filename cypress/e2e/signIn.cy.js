/// <reference types="cypress" />

describe('Sign In', () => {

  it('should login user', () => {
    cy.visit('/')

    cy.contains('a', 'Sign in')
    .should('exist')
    .click()

    cy.get(':nth-child(1) > .form-control')
    .type('kixiw@mailinator.com')

    cy.get(':nth-child(2) > .form-control')
    .type('Pa$$w0rd!')

    cy.get('.btn')
    .click()

    cy.contains('a','Quaera')
    .should('exist')
  });
});
