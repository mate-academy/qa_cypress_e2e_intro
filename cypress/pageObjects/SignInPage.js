export default class SignInPage {
  get emailField() {
    return cy.get('[data-cy="email-field"]').should('be.visible');
  }

  get passwordField() {
    return cy.get('[data-cy="password-field"]').should('be.visible');
  }

  get signInBtn() {
    return cy
      .get('[data-cy="sign-in-btn"]')
      .should('be.visible')
      .and('be.enabled');
  }

  typeEmail(email) {
    this.emailField.clear().type(email);
  }

  typePassword(password) {
    this.passwordField.clear().type(password);
  }

  clickSignIn() {
    this.signInBtn.click();
  }
}
