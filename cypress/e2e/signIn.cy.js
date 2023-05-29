/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io');

    cy.contains('Sign in')
    .click();

    cy.get('h1')
    .should('contain.text', 'Sign In');

    cy.get(':nth-child(1) > .form-control')
    .type('rock@qa.team');

    cy.get(':nth-child(2) > .form-control')
    .type('poiuy98745');

    cy.contains('.btn','Sign in')
    .click();

    cy.get(':nth-child(4) > .nav-link')
    .should('contain.text', 'BohemianQA');
  
  });
});

