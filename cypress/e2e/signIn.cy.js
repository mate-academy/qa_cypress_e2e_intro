/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login');
    cy.get('h1')
      .should('contain.text', 'Sign In');

    cy.get('input[placeholder="Email"]') // Email field
      .type('anton@gmail.com');

    cy.get('input[placeholder="Password"]') // Password field
      .type('Qwerty123');

    cy.get('button[type="submit"]').click(); // Sign In button

    cy.get('a.nav-link')
      .contains('Zhygan')
      .should('be.visible');
  });
});
