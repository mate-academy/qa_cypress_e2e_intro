/// <reference types="cypress" />

describe('Sign in page', () => {
  it('should login registered user with valid data', () => {
    cy.visit('https://react-redux.realworld.io');
    
    cy.get(':nth-child(2) > .nav-link')
    .click();

    cy.get(':nth-child(1) > .form-control')
    .type('inhatest@test.com');

    cy.get(':nth-child(2) > .form-control')
    .type('QA123456');

    cy.get('.btn')
    .click();

    cy.get('.navbar')
    .should('contain','inhatest');
  });
});
