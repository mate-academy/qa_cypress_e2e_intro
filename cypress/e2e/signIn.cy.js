/// <reference types="cypress" />

describe('user registration and Login Test', () => {
  let email;
  let password;
  let username;

  beforeEach(() => {
    cy.visit('/');
    cy.contains('Sign in').click();
  });

  it('should never log-in without advanced registration ', () => {
    const randomNumber = Math.random().toString().slice(2);
    username = `test_user_${randomNumber}`;
    email = `${username}@gmail.com`;
    password = 'Test123';

    cy.get('h1').should('contain.text', 'Sign in');
    cy.get('input[placeholder="Email"]').type(email);
    cy.get('input[placeholder="Password"]').type('Test1234');
    cy.get('.btn').click();
    cy.get('.error-messages')
      .should('have.text', 'email or password:is invalid');
  });

  it('should do log-in with the advanced registration ', () => {
    const randomNumber = Math.random().toString().slice(2);
    username = `test_user_${randomNumber}`;
    email = `${username}@gmail.com`;
    password = 'Test123';

    Cypress.env('email', email);
    Cypress.env('password', password);

    cy.get(':nth-child(3) > .nav-link')
      .should('contain.text', 'Sign up')
      .click();

    cy.get('h1')
      .should('contain.text', 'Sign up');

    cy.get(':nth-child(1) > .form-control')
      .type(username);
    cy.get(':nth-child(2) > .form-control')
      .type(email);
    cy.get(':nth-child(3) > .form-control')
      .type(password);

    cy.get('.btn').click();
    cy.url().should('equal', Cypress.config().baseUrl + '/');

    cy.get(':nth-child(3) > .nav-link')
      .should('contain.text', 'Settings')
      .click();

    cy.get('button.btn-outline-danger').click();
    cy.url()
      .should('equal', Cypress.config().baseUrl + '/');

    cy.get(':nth-child(2) > .nav-link').click();

    cy.get(':nth-child(1) > .form-control').type(Cypress.env('email'));
    cy.get(':nth-child(2) > .form-control').type(Cypress.env('password'));
    cy.get('.btn').click();

    cy.get('a.nav-link').contains('Global Feed');
  });
});
