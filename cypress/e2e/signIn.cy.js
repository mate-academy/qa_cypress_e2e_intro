/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide the ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login');
    cy.get(':nth-child(1) > .form-control').type('tmfancca@ukr.net');
    cy.get(':nth-child(2) > .form-control').type('123456');
    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link').should('contain', 'tanya');
  });
});
