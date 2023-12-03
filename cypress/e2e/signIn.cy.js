/// <reference types="Cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/#/login');
  });

  it('should provide an ability to log in', () => {
    cy.get('[placeholder = "Email"]').type('test_user_1@email.com');

    cy.get('[placeholder = "Password"]').type('123456789');
    cy.contains('[type="submit"]', 'Sign in')
      .click();
    cy.url()
      .should('include', '/#/');
  });
});

