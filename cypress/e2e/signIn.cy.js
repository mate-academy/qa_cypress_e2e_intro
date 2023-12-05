/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const username = 'wonsz';
    const email = 'wonsz@gmail.com';
    const password = 'wonsz';
    cy.visit('https://react-redux.realworld.io/#/login?_k=ww97hz');
    cy.url().should('include', 'login');

    cy.get('input[placeholder = Email]').type(email);
    cy.get('input[placeholder = Password').type(password);
    cy.contains('[type="submit"]', 'Sign in')
      .click();
    cy.get('.nav-link').contains(username).should('exist');
  });
});
