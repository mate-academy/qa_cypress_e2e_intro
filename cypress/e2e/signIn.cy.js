/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=f8lexx');
  });

  it('should provide an ability to log in', () => {
    cy.get(':nth-child(1) > .form-control').type('markekkk@i.ua');

    cy.get(':nth-child(2) > .form-control').type('123123Qq@');

    cy.get('.btn').click();

    cy.get('.nav-link').should('contain.text', 'markekkk');
  });
})