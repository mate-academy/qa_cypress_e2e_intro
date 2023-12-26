/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login');
  });

  it('should provide an ability to log in', () => {
    cy.get('h1')
      .should('contain.text', 'Sign In');

    cy.get(':nth-child(1) > .form-control')
      .type('Usertest2131@gmail.com');

    cy.get(':nth-child(2) > .form-control')
      .type('qwerty123');

    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', 'Corporis3');
  });
});
