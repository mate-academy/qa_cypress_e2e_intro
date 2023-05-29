/// <reference types="cypress" />

describe('Sign In page', () => {
  const email = 'usernamemay@gmail.com';
  const username = 'usernamemay';
  const password = 'Password123';

  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/');
  });

  it('should provide an ability to log in', () => {
    cy.contains('.nav-link', 'Sign in')
      .click();

    cy.get('[placeholder="Email"]')
      .type(email);

    cy.get('[placeholder="Password"]')
    .type(password);

    cy.contains('.btn', 'Sign in')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain', username);
  });
});
