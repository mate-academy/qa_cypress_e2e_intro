/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
  cy.visit("https://react-redux.realworld.io")
});

it('should sign in the user with valid data', () => {
  cy.get(':nth-child(2) > .nav-link')
  .click()
  
  cy.get(':nth-child(1) > .form-control')
  .type('newuser11@gmail.com')

  cy.get(':nth-child(2) > .form-control')
  .type('Newuser11')

  cy.get('.btn')
  .click()

  cy.get(':nth-child(4) > .nav-link')
  .should('contain', 'newuser11')

  });
});
