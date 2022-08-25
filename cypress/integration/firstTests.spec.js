/// <reference types="cypress" />

describe('Basic_level', () => {
  beforeEach( () => {
    cy.visit('https://react-redux.realworld.io')
  });

  it('Success Sign in', () => {
    cy.get(':nth-child(2) > .nav-link')
        .click()

    cy.get(':nth-child(1) > .form-control')
        .type('user_77@mail.com')

    cy.get(':nth-child(2) > .form-control')
        .type('Qwert12345')

    cy.get('.btn')
        .click()

    cy.get(':nth-child(4) > .nav-link')
        .should('contain.text', 'username77')
  });
});

