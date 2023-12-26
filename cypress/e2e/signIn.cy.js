/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'test876543';
  const email = 'test876543@gmail.com';
  const password = '12345678';

  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io');
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get(':nth-child(1) > .form-control').type(email);
    cy.get(':nth-child(2) > .form-control').type(password);
    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link').should('contain', username);
  });
});
