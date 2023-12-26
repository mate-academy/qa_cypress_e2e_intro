/// <reference types="cypress" />

beforeEach('Opening the main page', () => {
  cy.visit('https://react-redux.realworld.io/#/?_k=tfnjgk');
});

describe('Sign In page', () => {
  const userName = 'vitalik';
  const userEmail = 'vitalik@gmail.com';
  const userPassword = 'qwer1234';

  it('should provide an ability to log in', () => {
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get(':nth-child(1) > .form-control').type(userEmail);
    cy.get(':nth-child(2) > .form-control').type(userPassword);
    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link').should('contain', userName);
  });
});
