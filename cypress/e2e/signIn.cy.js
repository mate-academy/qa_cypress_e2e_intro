/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('Sign In page', () => {
  let user;

  beforeEach(() => {
    const username = `qa_${faker.string.uuid()}`;

    user = {
      username,
      email: `${username}@example.com`,
      password: faker.internet.password()
    };

    cy.registerUser(user);
    cy.visit('https://conduit.mate.academy/user/login');
  });

  it('should provide an ability to log in', () => {
    cy.get('input[type="email"]').type(user.email);
    cy.get('input[type="password"]').type(user.password, { log: false });
    cy.contains('button[type="submit"]', 'Sign in').click();

    cy.get('nav').within(() => {
      cy.contains('a', user.username)
        .should('be.visible')
        .and('have.text', user.username);
    });
  });
});
