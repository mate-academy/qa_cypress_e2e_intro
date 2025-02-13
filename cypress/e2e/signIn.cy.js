<reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    // Odwiedzenie strony logowania
    cy.visit('https://react-redux.realworld.io/#/login');

    // Wpisanie poprawnego e-maila i hasła
    cy.get('input[type="email"]').type('cypressTest@example.com');
    cy.get('input[type="password"]').type('password123');

    // Kliknięcie w przycisk "Sign In"
    cy.get('button[type="submit"]').click();

    // Sprawdzenie, czy nazwa użytkownika pojawiła się w nawigacji
    cy.get('.navbar').contains('cypressTestUser').should('be.visible');
  });
});
