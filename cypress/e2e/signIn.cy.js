/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('/#/login');
    cy.get('h1').should('contain.text', 'Sign In');
    cy.fixture('user').then(({
      email,
      password,
      username
    }) => {
      cy.findByPlaceholder('Email').type(email);
      cy.findByPlaceholder('Password').type(password);
      cy.get('.btn').click();
      cy.get('.navbar').should('contain.text', username);
    });
  });
});
