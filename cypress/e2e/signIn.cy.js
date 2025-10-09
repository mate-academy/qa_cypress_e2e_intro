<reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/login');
    cy.get('input[type="email"]').type('mateacademytestuser@example.com');
    cy.get('input[type="password"]').type('Qwerty123!');
    cy.contains('button', 'Sign in').click();
    cy.get('nav').contains('mateacademytestuser').should('be.visible');
  });
});
