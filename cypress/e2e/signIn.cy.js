/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login');
  });

  it('should open', () => {
    cy.get('h1.text-xs-center')
      .should('contain', 'Sign In');
  });

  it('should provide an ability to log in', () => {
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
