/// <reference types="cypress" />

describe('', () => {
  it('', () => {
    cy.visit('https://react-redux.realworld.io')
    cy.contains('Sign in')
    .click()
    
    cy.url()
    .should('include', '/login')

    cy.get(':nth-child(1) > .form-control')
    .type('zxc@zxc')

    cy.get(':nth-child(2) > .form-control')
    .type('zxc')

    cy.get('.btn')
    .click()

    cy.get(':nth-child(4) > .nav-link')
    .should('contain','zxc1')
  });
});
