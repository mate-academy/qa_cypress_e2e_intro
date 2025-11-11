/// <reference types="cypress" />

const { generateUser } = require('../support/generateUser');

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io').should('exist');
  });

  it('should provide an ability to log in', () => {
    Cypress.on('uncaught:exception', (err) => {
      // log the error so it is handled and returning false prevents Cypress from
      // failing the test
      /* eslint-disable no-console */
      console.error('Uncaught exception in test:', err);
      /* eslint-enable no-console */
      return false;
    });
    const { email, password, userName } = generateUser();

    /* cy.get("a.nav-link").should("contain.text", "Sign up").should("exist");
    cy.contains("a", "Sign up").should("exist").click();
    cy.get("h1").should("contain.text", "Sign Up").should("exist");
    const expectedRegisterUrl = "https://react-redux.realworld.io/#/register?";
    cy.url().should("contain", expectedRegisterUrl);

    cy.url().then((url) => {
      expect(url.slice(0, -9)).to.eq(expectedRegisterUrl);
    });

    cy.get('input[placeholder="Username"]').should('exist').type(userName);
    cy.get('input[placeholder="Email"]').should('exist').type(email);
    cy.get('input[placeholder="Password"]').should('exist').type(password);
    cy.contains('button.btn.btn-lg.btn-primary.pull-xs-right', 'Sign in')
      .should('exist')
      .click();
    cy.contains('button', 'Ok').should('exist').click();
*/
    cy.get('a.nav-link').should('contain.text', 'Sign in').should('exist');
    cy.contains('a', 'Sign in').should('exist').click();
    cy.get('h1').should('contain.text', 'Sign In').should('exist');
    const expectedLoginUrl = 'https://react-redux.realworld.io/#/login?';
    cy.url().should('contain', expectedLoginUrl);

    cy.url().then((url) => {
      expect(url.slice(0, -9)).to.eq(expectedLoginUrl);
    });

    // cy.get('input[placeholder="Username"]').should("exist").type(userName);
    cy.get('input[placeholder="Email"]').should('exist').type(email);
    cy.get('input[placeholder="Password"]').should('exist').type(password);
    cy.contains('button.btn.btn-lg.btn-primary.pull-xs-right', 'Sign in')
      .should('exist')
      .click();
    cy.get('a.nav-link').should('contain.text', userName).should('exist');
  });
});
