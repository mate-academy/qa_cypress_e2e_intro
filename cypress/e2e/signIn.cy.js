/// <reference types="cypress" />

describe('Sign In page', () => {
  const user = {
    email: 'test123321@i.ua',
    username: 'test123321',
    password: 'testpassword'
  };

  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/user/login');

    cy.get('[placeholder=Email]')
      .type(user.email);
    cy.get('[placeholder=Password]')
      .type(user.password);

    cy.get('.btn').click();

    cy.get('a.nav-link')
      .should('contain.text', user.username);
  });
});
