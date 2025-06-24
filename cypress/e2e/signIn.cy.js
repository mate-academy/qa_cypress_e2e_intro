/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in and ' +
    'contain username in the header after', () => {
    cy.visit('/user/login');

    cy.get('input[type="email"]')
      .should('exist')
      .type('moriarty@villainmail.com');

    cy.get('input[type="password"]')
      .should('exist')
      .type('moriarty');

    cy.get('button[type="submit"]')
      .should('exist')
      .click();

    cy.get('a.nav-link', { timeout: 1000 })
      .should('contain.text', 'moriarty');
  });
});
