/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=f8lexx');
  });

  it('should provide an ability to log in', () => {
    cy.get(':nth-child(1) > .form-control').type('Tilarus1235@gmail.com');

    cy.get(':nth-child(2) > .form-control').type('blabla12');

    cy.get('.btn').click();

    cy.get('.nav-link').should('contain.text', 'Blablabla123');
  });
})