/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=3c6uni');

    cy.get(':nth-child(1) > .form-control').type('chinhishan@meta.ua');

    cy.get(':nth-child(2) > .form-control').type('1234qwer');

    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link').should('contain', 'nameless');
  });
});
