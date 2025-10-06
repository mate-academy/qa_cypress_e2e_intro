/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the home page and display the expected heading', () => {
    cy.get('h1').should('contain.text', 'conduit');
  });

  it('should navigate to the Sign In page ', () => {
    cy.contains('.nav-link', 'Sign in').click();
    cy.get('h1').should('contain.text', 'Sign in');
    cy.url().should('include', '/login');
  });

  it('should login a user successfully', () => {
    cy.contains('.nav-link', 'Sign in').click();

    cy.get('[type=email]').type('ta@gmail.com');
    cy.get('[type=password]').type(123);
    cy.get('button[type=submit]').click();
    cy.get('a.nav-link').should('contain.text', 'ta');
  });
});
