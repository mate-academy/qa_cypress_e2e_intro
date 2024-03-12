/// <reference types="cypress" />

describe('Sign In page', () => {
  const email = 'gemowerez@mailinator.com';
  const username = 'Ullamco';
  const password = 'qwert12345';

  it('successfully login', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=uny8wd');
    cy.get('[placeholder="Email"]').type(email);
    cy.get('[placeholder="Password"]').type(password);
    cy.get('[type="submit"]').click();
    cy.get('.navbar .nav-item').last().should('have.text', username);
  });
});
