/// <reference types="cypress" />

describe('Sign In page', () => {
  before(() => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=5f6wqe');
  });

  it('should provide an ability to log in', () => {
    cy.get(':nth-child(2) > .nav-link')
      .click();
    cy.get(':nth-child(1) > .form-control')
      .type('testzlata@gmail.com');
    cy.get(':nth-child(2) > .form-control')
      .type('testZlata!333');

    cy.contains('.btn', 'Sign in')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain', 'testZlata');
  });
});
