/// <reference types="cypress" />

const { faker } = require('@faker-js/faker');

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('/#/register');

    const email = faker.internet.email();
    const name = faker.name.fullName();
    const password = 'password1234_ABC';

    cy.get('input[placeholder="Username"]').type(name);
    cy.get('input[placeholder="Email"]').type(email);
    cy.get('input[placeholder="Password"]').type(password);

    cy.contains('button', 'Sign in').click();
  });
});
