/// <reference types='cypress' />

const primaryUrl = 'https://react-redux.realworld.io/';
const backupUrl = 'https://conduit.mate.academy/';

describe('Sign in page', () => {
  it('should provide an ability to log in', () => {
    // Spróbuj odwiedzić główny URL
    cy.request({
      url: primaryUrl,
      failOnStatusCode: false
    }).then((response) => {
      const visitUrl = response.status === 200 ? primaryUrl : backupUrl;
      cy.visit(visitUrl);

      cy.contains('Sign in').click();

      cy.url().should('include', '/login');

      cy.get('[placeholder="Email"]').type('mate@mate.com');
      cy.get('[placeholder="Password"]').type('Mate.mate');

      cy.contains('[type="submit"]', 'Sign in').click();

      cy.get('nav', { timeout: 10000 })
        .contains('mate')
        .should('be.visible');
    });
  });
});
