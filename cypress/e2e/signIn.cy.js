/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

describe('Sign In page', () => {
  let userName, email, password;

  beforeEach(() => {
    ({ userName, email, password } = generateUser());

    cy.visit('https://conduit.mate.academy/');

    cy.get(':nth-child(3) > .nav-link')
      .click();

    cy.get(':nth-child(1) > .form-control')
      .type(userName);

    cy.get(':nth-child(2) > .form-control')
      .type(email);

    cy.get(':nth-child(3) > .form-control')
      .type(password);

    cy.get('.btn')
      .click();

    cy.contains('a.nav-link', 'Settings')
      .click();

    cy.get('button.btn.btn-outline-danger:contains("Or click here to logout")')
      .click();

    cy.visit('https://conduit.mate.academy/');
  });

  it('should provide an ability to log in', () => {
    cy.get('.nav-link')
      .contains('Sign in').click();

    cy.get('input[type="email"]')
      .type(email);

    cy.get('input[type="password"]')
      .type(password);

    cy.get('button[type="submit"]')
      .click();

    cy.get('.nav-link')
      .contains('New Article');
  });

  afterEach(() => {
    cy.contains('a.nav-link', 'Settings')
      .click();

    cy.get('button.btn.btn-outline-danger')
      .contains('Or click here to logout')
      .click();
  });
});
