
export default class SignInPage {
  get emailField() {
    return cy.get('[placeholder="Email"]');
  }

  get passwordField() {
    return cy.get('[placeholder="Password"]');
  }

  get signInButton() {
    return cy.contains('button', 'Sign in');
  }

  usernameLink(username) {
    return cy.contains('.nav-link', username);
  }
};
