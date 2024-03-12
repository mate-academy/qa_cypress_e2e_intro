/// <reference types="cypress" />

describe('Sign In page', () => {
  const EMAIL = 'gemowerez@mailinator.com';
  const USERNAME = 'Ullamco';
  const PASSWORD = 'qwert12345';

  it('successfully login', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=uny8wd');
    cy.get('[placeholder="Email"]').type(EMAIL);
    cy.get('[placeholder="Password"]').type(PASSWORD);
    cy.get('[type="submit"]').click();
    cy.get('.navbar .nav-item').last().should('have.text', USERNAME);
  });
});
