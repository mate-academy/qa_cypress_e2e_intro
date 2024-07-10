/// <reference types="cypress" />

const PLACEHOLDER_SELECTOR = {
  userName: '[placeholder="Username"]',
  email: '[placeholder="Email"]',
  password: '[placeholder="Password"]'
};

// special for Danylo) I leave an opportunity to reject my request
// because this constant should be moved to a separate file)))

describe('Sign In page', () => {
  const { faker } = require('@faker-js/faker');

  beforeEach(() => {
    cy.visit('/');
  });

  it.skip('should sign in new user', () => {
    const name = faker.internet.userName();
    const email = faker.internet.email();
    const password = faker.internet.password();

    cy.contains('a', 'Sign up').click();

    cy.get(PLACEHOLDER_SELECTOR.userName)
      .type(name);

    cy.get(PLACEHOLDER_SELECTOR.email)
      .type(email);

    cy.get(PLACEHOLDER_SELECTOR.password)
      .type(password);

    cy.contains('button', 'Sign in')
      .click();

    cy.contains('a', name);
  });

  it('should provide an ability to log in', () => {
    cy.contains('a', 'Sign in')
      .click();

    cy.get(PLACEHOLDER_SELECTOR.email)
      .type('Artem.Zakharchuk@ukr.net');

    cy.get(PLACEHOLDER_SELECTOR.password)
      .type('123456@small');

    cy.contains('button', 'Sign in')
      .click();

    cy.contains('a', 'Artem Zakharchuk');
  });
});
