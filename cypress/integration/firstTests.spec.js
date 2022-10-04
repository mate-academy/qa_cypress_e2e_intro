/// <reference types="cypress" />

describe('Automate the next test case', () => {

  it('Visit "Sign in" page', () => {
    cy.visit('https://react-redux.realworld.io');
    cy.get(':nth-child(2) > .nav-link')
      .should('contain.text', 'Sign in')
      .click();
    cy.url()
      .should('include', '/login');
    cy.get('h1')
      .should('contain.text', 'Sign In');
  });

  it('Fill login and password fields as valid data', () => {
    cy.get(':nth-child(1) > .form-control')
      .type('nastya_lisova@gmail.com');
    cy.get(':nth-child(2) > .form-control')
      .type('123456Qq!');
  });

  it('Click [Sign In] button', () => {
    cy.get('.btn')
      .click();
  });

  it('Assert your username appeared in "Site navigation (Header)" menu', () => {
    cy.get(':nth-child(4) > .nav-link')
    .should('contain.text', 'Nastya_Lisova');
  });
});