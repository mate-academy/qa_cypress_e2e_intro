/// <reference types="cypress" />

import {generateUser} from '../support/generateUser';

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/register');
  })
  it('should provide an ability to log in', () => {
    const { username, email, password } = generateUser();

    cy.registerNewUser(username, email, password);

    cy.contains('a', 'Settings')
        .click();

    cy.contains('button', 'Or click here to logout.')
        .click();

    cy.contains('a', 'Sign in')
        .click();

    cy.findByPlaceholder('Email')
      .type(email);

    cy.findByPlaceholder('Password')
      .type(password);

    cy.contains('button', 'Sign in')
      .click();

    cy.get(':nth-child(4) > .nav-link')
        .should('contain.text', username);
  });
});
