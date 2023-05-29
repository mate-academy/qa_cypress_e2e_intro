/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=vsrq3e');

    cy.url()
      .should('include', '/login');

    cy.get('h1')
      .should('contain.text', 'Sign In');

    cy.get('input[type="email"]')
      .type('anyalymorenko@gmail.com');

    cy.get('input[type="password"]')
      .type('12345678');

    cy.contains('.btn', 'Sign in')
      .click();
     
    cy.get(':nth-child(4) > .nav-link')
      .should('contain', 'anyalymo');
  });
});
