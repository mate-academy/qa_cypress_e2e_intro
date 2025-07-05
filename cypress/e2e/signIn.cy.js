/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const email = 'testsettest2343@fgjj.sdf';
    const password = 'Qwert@123';
    const username = 'testsettest2343';

    cy.visit('https://conduit.mate.academy/user/login');
    cy.get('[placeholder="Email"]').type(email);
    cy.get('[placeholder="Password"]').type(password);
    cy.contains('button', 'Sign in').click();
    cy.contains('a', username).should('exist');
  });
});
