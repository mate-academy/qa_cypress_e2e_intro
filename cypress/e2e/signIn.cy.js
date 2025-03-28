/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login');
  });

  it('should provide an ability to log in', () => {
    cy.get('h1.text-xs-center');

    cy.url()
      .should('include', '/login');

    cy.get(':nth-child(1) > .form-control')
      .type('qatest03@gmail.com');

    cy.get(':nth-child(2) > .form-control')
      .type('!Qatest123');

    cy.get('.btn')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', 'qatest03');
  });
});
