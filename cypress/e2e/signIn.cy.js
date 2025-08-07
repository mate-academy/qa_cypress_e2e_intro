/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Sign In page', () => {
  let username;
  let email;
  let password;

  beforeEach(() => {
    cy.visit('');

    username = `${faker.string.alpha({ length: 8, casing: 'lower' })}${faker.number.int({ min: 1000, max: 9999 })}`;
    email = faker.internet.email();
    password = faker.internet.password({ length: 12 });
  });

  it('should sign in with valid credentials', () => {
    cy.request('POST', '/api/users', {
      user: { username, email, password }
    })
      .its('status')
      .should('eq', 200);

    cy.contains('.nav-link', 'Sign in').click();

    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);

    cy.get('button[type="submit"]').click();

    cy.get('.nav-link').contains(username).should('be.visible');
  });
});
