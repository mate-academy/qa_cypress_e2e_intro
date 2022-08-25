/// <reference types="cypress" />

describe('Sign in', () => {
  it('Should login user sucsessful', () => {
    cy.visit('https://react-redux.realworld.io/#/');

    cy.get(':nth-child(2) > .nav-link')
    .click();

    cy.get(':nth-child(1) > .form-control')
      .type('usermax@gmail.com');

    cy.get(':nth-child(2) > .form-control')
      .type('Password123');

    cy.get('.btn')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain', 'userMax'); 

  });
});
