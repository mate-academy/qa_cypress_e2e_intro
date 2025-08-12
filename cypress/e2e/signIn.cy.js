/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const email = 'testuser123@example.com';
    const password = 'Test1234';
    const username = 'testuser123';

    cy.login(email, password);

    cy.get('.nav').contains(username).should('be.visible');
  });
});
