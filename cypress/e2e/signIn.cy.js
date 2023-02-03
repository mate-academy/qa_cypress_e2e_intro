/// <reference types="cypress" />

const url = 'https://react-redux.realworld.io';
const email = 'wytopinox@mailinator.com';
const username = 'CorruptiQA';
const password = '12345678Qa';


describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io');

    cy.get('.nav-link[href*="login"]').click();

    cy.get('.form-control[type*="email"]').type(email);

    cy.get('.form-control[type*="password"]').type(password);

    cy.contains('.btn-primary', 'Sign in').click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', username);

  });
});
