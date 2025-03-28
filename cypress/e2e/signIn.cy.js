/// <reference types="cypress" />

describe('Sign In page', () => {
  before(() => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=7wdido');
  });
  it('should provide an ability to log in', () => {
    cy.get(':nth-child(1) > .form-control').type('qatestmay24@test.com');
    cy.get(':nth-child(2) > .form-control').type('conduittest1');

    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link').should('contain', 'Papa1run22');
  });
});
