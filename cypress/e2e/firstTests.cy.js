/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should allow to login with existing data', () => {
    cy.visit('https://react-redux.realworld.io');

    cy.get(':nth-child(2) > .nav-link')
    .click();

    cy.get(':nth-child(1) > .form-control')
    .type('kate@qamail.com');

    cy.get(':nth-child(2) > .form-control')
    .type('01081992a');

    cy.get('.btn')
    .click();

    cy.get(':nth-child(4) > .nav-link')
    .should('contain', 'Kate_qa');
    
  });
});
