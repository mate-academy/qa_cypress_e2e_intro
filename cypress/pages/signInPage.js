import Page from './page';

export default class SignInPage extends Page {
  elements = {
    title: () => cy.contains('h1', 'Sign in'),
    emailInput: () => cy.getByPlaceholder('Email'),
    passwordInput: () => cy.getByPlaceholder('Password'),
    submitButton: () => cy.contains('.btn', 'Sign in')
  };

  visitHomeUrl() {
    cy.visit('/user/login');
  }

  registerNewUser() {
    return cy.registerNewUser().then((user) => user);
  }

  titleExists() {
    this
      .elements
      .title()
      .should('exist');
  }

  typeEmail(email) {
    this.elements.emailInput().type(email);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  submitSignInForm() {
    this
      .elements
      .submitButton()
      .click();
  }
}
