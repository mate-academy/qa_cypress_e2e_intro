/* eslint-disable max-len */
/// <reference types="cypress" />

describe('Sign In page', () => {
  const randomNumber = Math.random().toString().slice(2, 8);
  const userName = `SomeUser${randomNumber}`.toLowerCase();
  const email = `${userName}@mail.com`.toLocaleLowerCase();
  const password = 'RandomPassword123!';

  beforeEach(() => {
    cy.visit('https://conduit.mate.academy/user/register');
  });

  it('should provide an ability to log in', () => {
    cy.request('POST', 'https://conduit.mate.academy/api/users', {
      user: {
        username: userName,
        email,
        password
      }
    });

    cy.visit('https://conduit.mate.academy/user/login');
    cy.get('[placeholder="Email"]')
      .type(email);

    cy.get('[placeholder="Password"]')
      .type(password);

    cy.contains('[type="submit"]', 'Sign in')
      .click();

    cy.contains('a', `${userName}`)
      .should('exist');
  });
});
