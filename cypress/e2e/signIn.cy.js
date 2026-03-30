/// <reference types='cypress' />

describe('Sign in page', () => {
  it('should login user', () => {
    cy.registerNewUser().then(({ username, email, password }) => {
      cy.visit('https://conduit.mate.academy/user/login');

      cy.get('h1').should('contain.text', 'Sign in');

      cy.get('[placeholder=Email]').type('george2025@gmail.com');
      cy.get('[placeholder=Password]').type('Password2025');

      cy.get('.btn').click();

      cy.get('.nav-link').should('contain.text', `george2025`);
    });
  });
});
