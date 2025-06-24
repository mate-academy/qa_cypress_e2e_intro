/// <reference types="cypress" />

import { generateUser } from '../support/generateUser';

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('user/login');
  });

  it('should provide an ability to log in', () => {
    const { username, email, password } = generateUser();

    cy.request('POST', '/api/users', {
      user: {
        username,
        email,
        password
      }
    }).then(() => {
      cy.get('.form-control[type="email"]').should('exist').type(email);
      cy.get('.form-control[type="password"]').should('exist').type(password);
      cy.contains('button[type="submit"]', 'Sign in').should('exist').click();

      cy.contains('a', username).should('exist');
      cy.url().should('equal', Cypress.config('baseUrl') + '/');
    });
  });
});
