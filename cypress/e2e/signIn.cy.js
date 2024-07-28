/// <reference types="cypress" />

describe('Sign In page', () => {
  before(() => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=7wdido');
  });
  it('should provide an ability to log in', () => {
    cy.get(':nth-child(1) > .form-control').type('Kluchik@gmail.com');
    cy.get(':nth-child(2) > .form-control').type('qwerty123');

    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link').should('contain', 'Kluchik');
  });
});
