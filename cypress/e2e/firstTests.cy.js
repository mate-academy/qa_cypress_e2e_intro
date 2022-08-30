/// <reference types="cypress" />

describe('Sign in page', () => {
  it('should login with valid data', () => {
    cy.visit('https://react-redux.realworld.io');

    cy.get(':nth-child(2) > .nav-link')
    .click()

    cy.get(':nth-child(1) > .form-control')
    .type('Userqa12@gmail.com')

    cy.get(':nth-child(2) > .form-control')
    .type('Qwerty123')

    cy.get('.btn')
    .click()

    cy.get(':nth-child(4) > .nav-link')
    .should('contain', 'Userqa12')
  });
});
