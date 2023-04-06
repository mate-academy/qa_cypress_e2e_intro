export default class SignIn {
  emailLocator = 'input[type="email"]';
  pswdLocator = 'input[type="password"]';
  submitBtnLocator = 'button[type="submit"]';

  setEmail(email) {
    cy.get(this.emailLocator).type(email);
  }

  setPswd(pswd) {
    cy.get(this.pswdLocator).type(pswd);
  }

  submit() {
    cy.get(this.submitBtnLocator).click();
  }
}
