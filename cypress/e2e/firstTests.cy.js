/// <reference types="cypress" />

describe('My first test', () => {
  it('should', () => {
    cy.visit('https://react-redux.realworld.io/')
      cy.get(':nth-child(2) > .nav-link')
      .click()
    cy.get(':nth-child(1) > .form-control')
      .type('bonddarnan67@gmail.com')
    cy.get(':nth-child(2) > .form-control')
      .type('Sera2721994!@#')
    cy.get('.btn')
      .click()
    cy.get(':nth-child(4) > .nav-link').contains('annabondar36')

  });
});
