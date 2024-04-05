/// <reference types='cypress' />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.registerNewUser().then(({ username, email, password }) => {
      cy.visit('#/login');
      cy.getByPlaceholder('Email').type(email);
      cy.getByPlaceholder('Password').type(password);
      cy.contains('button', 'Sign in').click();

      cy.contains('a', username).should('have.attr', 'href', `#@${username}`);
    });
  });
});
