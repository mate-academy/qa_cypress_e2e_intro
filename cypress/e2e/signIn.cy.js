/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/#/login');

    cy.get('input').eq(0).type('testuser123@gmail.com');
    cy.get('input').eq(1).type('Test1234!');

    cy.contains('button', 'Sign in').click();

    cy.contains('.navbar', 'testuser123').should('be.visible');
  });
});
