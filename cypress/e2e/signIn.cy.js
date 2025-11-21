/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');

describe('Sign In', () => {
  beforeEach(() => {
    cy.visit('https://conduit.mate.academy/user/login');
  });

  it('should provide an abilty to log in ', () => {
    const username = 'a' + faker.internet.userName().toLowerCase();
    const email = faker.internet.email().toLowerCase();
    const password = 'Create1234!';

    cy.request('POST', 'https://conduit.mate.academy/api/users', {
      user: {
        username,
        email,
        password
      }
    });

    cy.get(':nth-child(1) > .form-control').type(email);
    cy.get(':nth-child(2) > .form-control').type(password);
    cy.contains('button', 'Sign in').click();
    cy.get('.navbar .nav-link[href^="/profile/"]').should('contain', username);
  });
});
