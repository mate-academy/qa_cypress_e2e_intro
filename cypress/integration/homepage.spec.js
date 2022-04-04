/// <reference types="cypress" />

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Redirect to Sign up page', () => {
    cy.contains('a','Sign up')
      .click();

    cy.assertPageURl('/register');

    cy.get('h1')
      .should('contain.text','Sign Up');
  });

  it('Redirect to Sign in page', () => {
    cy.contains('a','Sign in')
      .click();
      
    cy.assertPageURl('/login');

    cy.get('h1')
      .should('contain.text','Sign In');
  });

  it('Redirect to Home page', () => {
    cy.contains('a','Home')
      .click();
      
    cy.assertPageURl('/');

    cy.get('h1')
      .should('contain.text','conduit');
  });
});

  