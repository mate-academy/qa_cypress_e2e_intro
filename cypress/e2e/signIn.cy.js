/// <reference types="cypress" />

const { generateUser } = require('../support/generateUser');

describe('Sign In page', () => {
  let user;
  beforeEach(() => {
    user = generateUser();

    cy.request({
      method: 'POST',
      url: 'https://conduit.mate.academy/api/users',
      body: {
        user: {
          email: user.email,
          password: user.password,
          username: user.username
        }
      }
    }).then((res) => {
      expect([200, 201]).to.include(res.status);
    });

    cy.visit('/user/login');
  });

  it('should provide an ability to log in', () => {
    const { username, email, password } = user;

    cy.get('h1').should('contain.text', 'Sign in');

    cy.get('[placeholder=Email]')
      .type(email);

    cy.get('[placeholder=Email]')
      .should('have.value', email);

    cy.get('[placeholder=Password]')
      .type(password);

    cy.get('[placeholder=Password]')
      .should('have.value', password);

    cy.get('.btn').click();
    cy.url().should('equal', Cypress.config().baseUrl + '/');
    cy.get(':nth-child(4) > .nav-link').should('contain.text', `${username}`);
  });

  it('should not log in if email or password are invalid', () => {
    const { username, email, password } = user;

    cy.get('h1').should('contain.text', 'Sign in');

    cy.get('[placeholder=Email]')
      .type(email);

    cy.get('[placeholder=Email]')
      .should('have.value', email);

    cy.get('[placeholder=Password]')
      .type(password);

    cy.get('[placeholder=Password]')
      .should('have.value', password);

    cy.get('.btn').click();
    cy.url().should('equal', Cypress.config().baseUrl + '/');
    cy.get(':nth-child(4) > .nav-link').should('contain.text', `${username}`);
    cy.contains('a', 'Settings').click();
    cy.contains('button', 'Or click here to logout.').click();
    cy.visit('/user/login');
    const newUser = generateUser();
    cy.get('h1').should('contain.text', 'Sign in');

    cy.get('[placeholder=Email]')
      .type(newUser.email);

    cy.get('[placeholder=Email]')
      .should('have.value', newUser.email);

    cy.get('[placeholder=Password]')
      .type(newUser.password);

    cy.get('[placeholder=Password]')
      .should('have.value', newUser.password);

    cy.get('.btn').click();
  });
});
