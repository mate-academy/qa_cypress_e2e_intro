/// <reference types="cypress" />

describe('Sign In page', () => {
  const randomNumber = Math.random().toString().slice(2, 8);
  const username = `SomeUser${randomNumber}`.toLowerCase();
  const email = `${username}@mail.com`.toLocaleLowerCase();
  const password = 'RandomPassword123!';

  beforeEach(() => {
    cy.visit('/');
  });

  it('should provide an ability to log in', () => {
    cy.request('POST', 'https://conduit.mate.academy/api/users', {
      user: {
        username,
        email,
        password
      }
    });
    cy.get('a[href="/user/login"]').click();
    cy.get('input[placeholder="Email"]').type(email);
    cy.get('input[placeholder="Password"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.contains('a', `${username}`)
      .should('exist');
  });
});
