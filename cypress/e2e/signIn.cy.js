/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/user/login')
    cy.get(':nth-child(1) > .form-control')
      .type('demo@demo.com')
    cy.get(':nth-child(2) > .form-control')
      .type('demo123')
    cy.get('.btn')
      .click()
    cy.get(':nth-child(4) > .nav-link')
      .contains('olhakostovetska')
  });
});
