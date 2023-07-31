/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login');
  });

  const email = 'Bdv9876@gmail.com';
  const password = 'Bdv9876';

  it('should provide an ability to log in', () => {
    cy.url()
      .should('include', '/login');

    cy.get('h1.text-xs-center')
      .should(`be.visible`);

    cy.get(':nth-child(2) > .nav-link')
      .click();

    cy.get(':nth-child(1) > .form-control')
      .type(email);

    cy.get(':nth-child(2) > .form-control')
      .type(password);

    cy.get('.btn')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', 'Bdv9876');
  });
});
