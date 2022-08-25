/// <reference types="cypress" />

describe('login page', () => {
  it('User should log in with their credentials', () => {
  cy.visit('https://react-redux.realworld.io');
  
  cy.get(':nth-child(2) > .nav-link')
  .click();

  cy.get(':nth-child(1) > .form-control')
  .type('lama7@gmail.com');

  cy.get(':nth-child(2) > .form-control')
  .type ('123456Aa)');

  cy.get('.btn')
  .click();

  cy.get(':nth-child(4) > .nav-link')
  .should('contain', 'Lama');
  });
});
