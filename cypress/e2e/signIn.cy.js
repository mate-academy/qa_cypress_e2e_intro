/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login');
  });

  it('should provide an ability to log in', () => {
    cy.get('[placeholder="Email"]')
      .type('Barny45@gmail.com');

    cy.get('[placeholder="Password"]')
      .type('testpass45');

    cy.get('[type="submit"]')
      .click();

    cy.get('[href="#@Barny45"]')
      .should('contain.text', 'Barny45');
  });
});
