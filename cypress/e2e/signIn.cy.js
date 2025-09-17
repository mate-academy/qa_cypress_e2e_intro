/// <reference types="cypress" />

import SignInPage from '../pageObjects/SignInPage';
import Header from '../pageObjects/Header';

describe('Sign In', () => {
  const user = {
    email: Cypress.env('email'),
    password: Cypress.env('password'),
    username: Cypress.env('username')
  };

  const signInPage = new SignInPage();
  const header = new Header();

  beforeEach(() => {
    cy.visit('/#/login'); // baseUrl is configured in cypress.config.js
  });

  it('should log in successfully and show username in header', () => {
    // Intercept login API
    cy.intercept('POST', '**/api/users/login').as('login');

    // Fill in login form
    signInPage.typeEmail(user.email);
    signInPage.typePassword(user.password);
    signInPage.clickSignIn();

    // Wait for login and assert API response
    cy.wait('@login').its('response.statusCode').should('eq', 200);

    // Assert username appears in header
    header.getProfileMenu(user.username).should('contain', user.username);
  });
});
