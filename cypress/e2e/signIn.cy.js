/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    // Visit the Sign In page
    cy.visit('https://react-redux.realworld.io/#/login');
    cy.get('h1')
      .should('contain.text', 'Sign In');

    cy.get(':nth-child(1) > .form-control')
      .type('test@gmail.com');

    cy.get(':nth-child(2) > .form-control')
      .type('Test1234!');

    cy.get('.btn')
      .click();

    cy.get('a.nav-link')
      // eslint-disable-next-line no-undef
      .should('contain', username);
  });
});
