/// <reference types="cypress" />

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should open Sign up page', () => {
    cy.contains('a','Sign up')
      .should('exist')
      .click();

    cy.assertPageURl('/register');

    cy.get('h1')
      .should('contain.text','Sign Up');
  });

  it('Should open Sign in page', () => {
    cy.contains('a','Sign in')
      .should('exist')
      .click();
      
    cy.assertPageURl('/login');

    cy.get('h1')
      .should('contain.text','Sign In');
  });
});
  