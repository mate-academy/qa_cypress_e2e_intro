/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const username = 'Testowy_1234';
    const email = `${username}@mail.com`;
    const password = 'Test1234!';

    cy.visit('https://react-redux.realworld.io/#/login?_k=b320im');

    cy.url().should('include', 'login');

    cy.get('input[placeholder=Email]')
      .type(email);

    cy.get('input[placeholder=Password]')
      .type(password);

    cy.get('form button')
      .contains('Sign in')
      .click();

    cy.get('.nav-link')
      .contains(username)
      .should('exist');
  });
});
