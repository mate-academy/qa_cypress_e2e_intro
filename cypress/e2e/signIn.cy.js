/// <reference types="cypress" />

import SignInPage from '../pages/signInPage';

describe('Sign In page', () => {
  const loginPage = new SignInPage();

  beforeEach(() => {
    loginPage.visitHomeUrl();

    loginPage.registerNewUser().then((user) => user).as('user');
  });

  it('should provide an ability to log in', () => {
    loginPage.titleExists();

    cy.get('@user').then((user) => {
      const { email, username, password } = user;
      loginPage.typeEmail(email);
      loginPage.typePassword(password);

      loginPage.submitSignInForm();

      loginPage.isUserAuthenticated(username);
    });
  });
});
