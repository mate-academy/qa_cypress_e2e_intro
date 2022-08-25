/// <reference types="cypress" />

describe('Login page', () => {
  it('should sign in user with valid data', () => {
    cy.visit('https://react-redux.realworld.io')

    cy.get(':nth-child(2) > .nav-link')
      .click()

      cy.get(':nth-child(1) > .form-control')
        .type('user2508@gmail.com')

      cy.get(':nth-child(2) > .form-control')
        .type('User.2508')

        cy.get('.btn')
        .click()

        cy.get(':nth-child(4) > .nav-link')
        .should('contain', 'UserTest2508')
  });
});
