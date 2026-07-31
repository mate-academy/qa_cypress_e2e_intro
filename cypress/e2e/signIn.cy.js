/// <reference types="cypress" />

import signInPage from '../support/pages/SignInPage';

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    signInPage.visit();
    signInPage.enterEmail('tester1980!@gmail.com');
    signInPage.enterPassword('Tester1234!');
    signInPage.clickSignIn();

    signInPage.checkUsername('testerek1980');
  });
});
