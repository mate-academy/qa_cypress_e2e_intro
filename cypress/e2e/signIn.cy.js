/// <reference types="cypress" />

describe('Sign In page', () => {
  const primaryUrl = 'https://react-redux.realworld.io';
  const backupUrl = 'https://conduit.mate.academy';

  const email = Cypress.env('email');
  const password = Cypress.env('password');
  const expectedUsername = Cypress.env('username');

  it('should provide an ability to log in', () => {
    cy.request({
      url: primaryUrl,
      failOnStatusCode: false
    }).then((response) => {
      const baseUrl =
        response.status === 200 ? primaryUrl : backupUrl;

      cy.log(`Visiting: ${baseUrl}`);
      cy.visit(`${baseUrl}/login`);

      cy.login(email, password);

      cy.get('nav').within(() => {
        cy.contains('a', expectedUsername).should('be.visible');
      });
    });
  });
});

