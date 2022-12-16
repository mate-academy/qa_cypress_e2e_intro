/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=682lcv')
  });
  it('should provide an ability to log in', () => {
    cy.get(':nth-child(1) > .form-control')
    .type('gagoz@mailinator.com');

    cy.get(':nth-child(2) > .form-control')
    .type('plus23');

    cy.contains('.btn', 'Sign in')
     .click();

     cy.wait(4000)

     cy.get(':nth-child(4) > .nav-link').should('contain.text', 'Minus23');
  });
});
