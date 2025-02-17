/// <reference types="cypress" />

import SignInPage from '../pageObjects/signInPage';
import generateUserData from '../support/generateUserData';
const signInPage = new SignInPage();

describe('Sign In', () => {
  it('should sign in registered user', () => {
    cy.visit('/login');

    // DESTRUCTURING of generateUserData function
    const { username, email, password } = generateUserData();
    const registrUrl = `http://localhost:1667/users`;

    // Registration of user
    cy.request('POST', registrUrl, { username, email, password });

    signInPage.emailField.type(email);
    signInPage.passwordField.type(password);
    signInPage.signInButton.click();
    cy.url().should('equal', 'http://localhost:1667/#/');
    signInPage.usernameLink(username).should('exist');
  });
});
