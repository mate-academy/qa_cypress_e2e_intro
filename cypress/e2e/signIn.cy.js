/// <reference types="cypress" />

const { generateUserData } = require('../support/generateUserData');

describe('Sign In', () => {
  it('should sign in registered user', () => {
    cy.visit('/login');

    // DESTRUCTURING of generateUserData function
    const { username, email, password } = generateUserData();
    const registrUrl = `http://localhost:1667/users`;

    // Registration of user
    cy.request('POST', registrUrl, { username, email, password });

    cy.get('[placeholder="Email"]')
      .type(email);
    cy.get('[placeholder="Password"]')
      .type(password);
    cy.contains('button', 'Sign in')
      .click();
    cy.url().should('equal', 'http://localhost:1667/#/');
    cy.contains('.nav-link', username).should('exist');
  });

  // Negative tests
  // it('should not sign in with wrong password', () => {
  //   cy.visit('/login');

  //   const {username, email, password} = generateUserData();
  //   const registrUrl = `http://localhost:1667/users`;

  //   cy.request('POST', registrUrl, {username, email, password});

  //   cy.get('[placeholder="Email"]')
  //     .type(email);

  //   cy.get('[placeholder="Password"]')
  //     .type(`${password}1`);

  //   cy.contains('button', 'Sign in')
  //     .click();

  //   cy.contains('Invalid user credentials.').should('exist');

  //   cy.url().should('eq', `${Cypress.config().baseUrl}/login`)

  //   cy.get('body').click();

  //   cy.contains('a', 'Sign in').should('exist');
  //   cy.contains('a', 'Sign up').should('exist');
  // });

  // it('should not sign in with wrong email', () => {
  //   cy.visit('/login');

  //   const {username, email, password} = generateUserData();
  //   const registrUrl = `http://localhost:1667/users`;

  //   cy.request('POST', registrUrl, {username, email, password})
  //   .then((response) => {
  //     expect(response.status).to.eq(200)
  //   });;

  //   cy.get('[placeholder="Email"]')
  //     .type(`q${email}`);

  //   cy.get('[placeholder="Password"]')
  //     .type(password);

  //   cy.contains('button', 'Sign in')
  //   .click();

  //   cy.contains('Invalid user credentials.').should('exist');

  //   cy.url().should('eq', `${Cypress.config().baseUrl}/login`)

  //   cy.get('body').click();

  //   cy.contains('a', 'Sign in').should('exist');
  //   cy.contains('a', 'Sign up').should('exist');
  // });
});
