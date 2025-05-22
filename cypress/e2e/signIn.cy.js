/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('Sign In page', () => {
  const BASE_URL = 'https://conduit.mate.academy';
  const API_URL = `${BASE_URL}/api/users`;

  const SELECTORS = {
    loginLink: 'a[href="/user/login"]',
    emailInput: 'input[placeholder="Email"]',
    passwordInput: 'input[placeholder="Password"]',
    loginButton: 'button[type="submit"]'
  };

  const generateUser = () => {
    const username = faker.string.alpha({
      length: { min: 3, max: 12 },
      casing: 'lower'
    });

    const email = faker.internet.email({ firstName: username }).toLowerCase();
    const password = faker.internet.password({
      length: 12,
      memorable: true,
      pattern: /[A-Z]/,
      prefix: '1!'
    });

    return {
      username,
      email,
      password,
      payload: {
        user: { username, email, password }
      }
    };
  };

  beforeEach(() => {
    cy.visit(BASE_URL);
  });

  it('should allow a user to log in with valid credentials', () => {
    const { username, email, password, payload } = generateUser();

    cy.request('POST', API_URL, payload);

    cy.get(SELECTORS.loginLink).click();
    cy.get(SELECTORS.emailInput).type(email);
    cy.get(SELECTORS.passwordInput).type(password);
    cy.get(SELECTORS.loginButton).click();

    cy.contains('a', username).should('exist');
  });
});
