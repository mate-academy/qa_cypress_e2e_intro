/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login');
  });

  it('should provide an ability to log in', () => {
    const email = `matesobaka@mate.ua`;
    const Password = `123123123`;

    cy.url()
      .should('include', '/login');
    cy.get('h1.text-xs-center')
      .should(`be.visible`);

    cy.get('h1.text-xs-center')
      .should('contain.text', 'Sign In');
    cy.get(':nth-child(1) > .form-control')
      .type(email);
    cy.get(':nth-child(2) > .form-control')
      .type(Password);
    cy.get('.btn')
      .click();
    cy.get('.btn')
      .should(`be.visible`);
    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', 'user222222');
  });
});
