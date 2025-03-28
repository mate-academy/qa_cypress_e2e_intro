/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should allow to sign in', () => {
    cy.visit('https://react-redux.realworld.io');
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get(':nth-child(1) > .form-control').type('natanata221@gmail.com');
    cy.get(':nth-child(2) > .form-control').type('natanata221');
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link')
      .contains('.nav-link', 'natanata221')
      .should('exist');
  });
});
