/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/');

    cy.contains('Sign in').click();
    cy.get('input[type="email"]').type('fake1234@gmail.com');
    cy.get('input[type="password"]').type('fake1234')

    cy.get('button[type="submit"]').click();

    cy.wait(2000)
    cy.contains('fake1234').should('be.visible');
  });
});
