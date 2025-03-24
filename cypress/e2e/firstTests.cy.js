/// <reference types="cypress" />

describe('Successful login', () => {

  it('Sign in', () => {
    cy.visit('https://react-redux.realworld.io');
    cy.get(':nth-child(2) > .nav-link')
      .click();
    cy.get(':nth-child(1) > .form-control')
      .type("user@pack.com");
    cy.get('[placeholder="Password"]')
      .type('user123');
    cy.get('.btn')
      .click();
    cy.get(':nth-child(4) > .nav-link')
      .should('contains.text', 'Userpack');
  });
});
   