/// <reference types="cypress" />

const { faker } = require('@faker-js/faker');

describe('Sign In page', () => {
  const username = `${faker.person.firstName()}_${faker.person.lastName()}`;
  const email = faker.internet.email().toLowerCase();
  const password = faker.internet.password();

  before(() => {
    cy.request({
      method: 'POST',
      url: '/api/users',
      body: { user: { username, email, password } },
      failOnStatusCode: false
    });
  });

  it('should provide an ability to log in', () => {
    cy.visit('/user/login');

    cy.get('input[placeholder="Email"]').type(email);

    cy.get('input[placeholder="Password"]').type(password);

    cy.contains('button[type="submit"]', 'Sign in').click();

    cy.get('nav').contains('a', username.toLowerCase()).should('be.visible');

    cy.location('pathname').should('equal', `/`);
  });
});
