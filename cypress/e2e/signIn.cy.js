/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login');
  });

  it('should provide an ability to log in', () => {

    cy.url()
      .should('include', '/login');

    cy.get('h1.text-xs-center')
      .should('contain.text', 'Sign In');

    cy.get(':nth-child(1) > .form-control')
      .type('anton111@gmail.com');
    cy.get(':nth-child(2) > .form-control')
      .type('230792');
    cy.contains('.btn', 'Sign in')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', 'anton111');
  });
});
