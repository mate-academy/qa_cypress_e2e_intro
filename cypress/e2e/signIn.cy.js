describe('Sign In', () => {
  beforeEach(() => {
    // Korzystamy z baseUrl ustawionego w cypress.config.js
    cy.visit('/#/login');
  });

  it('should log in successfully and display the correct username', () => {
    // Wprowadzamy dane użytkownika z konfiguracji
    cy.get('input[type="email"]').type(Cypress.env('USER_EMAIL'));
    cy.get('input[type="password"]').type(Cypress.env('USER_PASSWORD'));
    cy.get('button[type="submit"]').click();

    // Sprawdzamy, czy w nagłówku pojawia się poprawna nazwa użytkownika
    cy.get('a.nav-link').contains(Cypress.env('USER_NAME')).should('be.visible');
  });
});


