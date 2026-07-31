class SignInPage {
  visit() {
    cy.visit('https://conduit.mate.academy/user/login');
  }

  enterEmail(email) {
    cy.get('input[placeholder="Email"]').type(email);
  }

  enterPassword(password) {
    cy.get('input[placeholder="Password"]').type(password);
  }

  clickSignIn() {
    cy.contains('button', 'Sign in').click();
  }

  checkUsername(username) {
    cy.contains('a.nav-link', username).should('be.visible');
  }
}

export default new SignInPage();
