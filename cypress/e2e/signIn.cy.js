/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login')
  });
  it('should provide an ability to log in', () => {
    cy.get(':nth-child(1) > .form-control').type('vik32@qa.team');

    cy.get(':nth-child(2) > .form-control').type('Test_vik32');

    cy.contains('.btn', 'Sign in').click();

    cy.get(':nth-child(4) > .nav-link').should('contain', 'Test_vik32');
  });
});
