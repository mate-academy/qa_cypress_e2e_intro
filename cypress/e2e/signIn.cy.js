/// <reference types="cypress" />

describe('Sign In page', () => {
  const randomNumber = Math.random().toString().slice(2, 5);
  const username = `test${randomNumber}`;
  const email = `${username}@gmail.com`;
  const password = 'Testpass1!';

  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/');

    cy.contains('Sign up').click();

    cy.get(':nth-child(1) > .form-control').type(username);
    cy.get(':nth-child(2) > .form-control').type(email);
    cy.get(':nth-child(3) > .form-control').type(password);
    cy.get('.btn').click();

    cy.contains('Settings').click();

    cy.contains('Or click here to logout.').click();

    cy.contains('Sign in').click();

    cy.get(':nth-child(1) > .form-control').type(email);
    cy.get(':nth-child(2) > .form-control').type(password);
    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link').should('contain.text', username);
  });
});
