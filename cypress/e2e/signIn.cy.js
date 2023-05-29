/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'testqa1_cypress';
  const email = 'testqa1_cypress@gmail.com';
  const password = 'testqa1_cypress';

  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login')

    cy.get('input[type="email"]')
      .type(email)

    cy.get('input[type="password"]')
      .type(password)

    cy.get('button[type = "submit"]')
      .click();

    cy.contains(':nth-child(4) > .nav-link', username)
  });
});
