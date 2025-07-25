/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('');
  });

  const username = faker.internet.userName().replace('.', '');
  const email = faker.internet.email();
  const password = faker.internet.password();

  it('should register and login then', () => {
    cy.request('POST', '/api/users/', {
      user: {
        username,
        email,
        password
      }
    }).its('status').should('eq', 200);

    cy.get(':nth-child(2) > .nav-link').click();

    cy.get('input[placeholder="Email"]').type(email);
    cy.get('input[placeholder="Password"]').type(password);

    cy.get('.btn-primary').click();
  });
});
