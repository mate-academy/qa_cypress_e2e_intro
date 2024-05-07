/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=axfmw5');
  });
  it('should provide an ability to log in', () => {
    cy.get(':nth-child(1) > .form-control').type('455@gmail.com');

    cy.get(':nth-child(2) > .form-control').type('tmn588lw');

    cy.get('.btn').click();

    cy.get('.nav-link').should('contain.text', 'David');
  });
});
