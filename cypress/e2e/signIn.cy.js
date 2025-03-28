/// <reference types="cypress" />

describe('Sign In page', () => {
  before(() => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=jlvjml')
  });
  it('should provide an ability to log in', () => {
    cy.get(':nth-child(1) > .form-control').type('zaharova@mail.com');
    cy.get(':nth-child(2) > .form-control').type('Zaharova1.');
    cy.get('.btn').click();
    cy.get('.navbar').should('contain', 'Zaharova');
  });
});
