/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should provide an ability to log in', () => {
    const username = 'cytestv2';
    const email = 'cytestv2@gmail.com';
    const password = 'cytestv243';
    cy.get('.navbar a.nav-link')
      .contains('Sign in').click();
    cy.url()
      .should('contain', '/#/login');
    cy.get('body form')
      .should('exist');

    cy.intercept('GET',
      'https://api.realworld.io/api/articles/feed?limit=10&offset=0')
      .as('unauthorizedLogin');
    cy.get('[placeholder="Email"]')
      .type(email);
    cy.get('[placeholder="Password"]')
      .type(password);

    cy.get('[type="submit"]')
      .click();
    cy.url()
      .should('include', '/#/');
    cy.get('.navbar a.nav-link')
      .contains(username)
      .should('have.text', 'cytestv2');
  });
});
