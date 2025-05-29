/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/user/login');

    cy.get('input[type="email"]').type('user675@mate.academy');
    cy.get('input[type="password"]').type('Qwerty123!');

    cy.get('button[type="submit"]').click();

    cy.get('nav')
      .contains('user675')
      .should('be.visible');
  });
});
