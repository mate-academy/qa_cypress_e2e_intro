/// <reference types="cypress" />

import SignInPage from '../pageObjects/signInPage';
import generateUserData from '../support/generateUserData';
const signInPage = new SignInPage();

it('should sign in registered user', () => {
  describe('Sign In', () => {
    cy.visit('/user/login');

    // DESTRUCTURING of generateUserData function
    const { username, email, password } = generateUserData();
    const registrUrl = `https://conduit.mate.academy/api/users`;

    // Registration of user
    cy.request('POST', registrUrl, { user: { username, email, password } });

    signInPage.emailField.type(email);
    signInPage.passwordField.type(password);
    signInPage.signInButton.click();
    cy.url().should('equal', 'https://conduit.mate.academy/');
    signInPage.usernameLink(username.toLowerCase()).should('exist');
  });
});
