/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('/');
    cy.get(':nth-child(1) > .form-control')
      .type('baska@baska.baska');

    cy.get(':nth-child(2) > .form-control')
      .type('baska');

    cy.get('.btn')
      .click();

    cy.contains('li.nav-item', 'baska')
      .should('exist');
  });
});
