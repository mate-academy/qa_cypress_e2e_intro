/// <reference types='cypress' />

const { faker } = require('@faker-js/faker');

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://conduit.mate.academy/user/login');
  });

  it('should provide an ability to log in', () => {
    const username = (
      'a' +
      faker.string.alphanumeric(10) +
      Date.now()
    ).toLowerCase();
    const email = faker.internet.email().toLowerCase();
    const password = 'Create1@';

    cy.request('POST', 'https://conduit.mate.academy/api/users', {
      user: {
        username,
        email,
        password
      }
    });

    cy.get('input.form-control[placeholder=\'Email\']').type(email);
    cy.get('input.form-control[placeholder=\'Password\']').type(password);
    cy.contains('button', 'Sign in').click();
    cy.get('.navbar .nav-link[href^="/profile/"]').should('contain', username);
  });
});
