/// <reference types="cypress" />

// const { includes } = require("cypress/types/lodash");

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/')
      .get('h1')
      .should('contain.text', 'conduit');
  });
  
  it('should provide an ability to log in', () => {
    const email = 'zorka@gmail.com';
    const password = '123';

    cy.visit('/')
      .get('h1')
      .should('contain', 'conduit');

    cy.contains('a', 'Sign in')
      .click();

    cy.url()
      .should('include', '/login');

    cy.get('h1.text-xs-center')
      .should('contain.text', 'Sign In');

    cy.get('[placeholder = "Email"]')
      .type(email);

    cy.get('[placeholder = "Password"]')
      .type(password);

    cy.contains('.btn[type="submit"]', 'Sign in')
      .click();

    cy.get('a[href="#@zorka"]')
      .should('contain', 'zorka');

  });
});
