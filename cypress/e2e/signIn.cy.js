/// <reference types="cypress" />

describe('Sign In page', () => {

  it('should provide an ability to log in', () => {
    const randomNumber = Math.random().toString().slice(2);
    const username = `test-user-${randomNumber}`;
    const email = `${username}@gmail.com`;
    const password = 'Qwer1234';

    cy.visit('https://react-redux.realworld.io/');
    cy.contains('a', 'Sign up').should('exist').click();
    // I don't get why the request isn't working
    // cy.request('POST', 'https://api.realworld.io/api/users', {
    //   username,
    //   email,
    //   password
    // })
    cy.get('[placeholder="Username"]').type(username);
    cy.get('[placeholder="Email"]').type(email);
    cy.get('[placeholder="Password"]').type(password);
    cy.contains('button', 'Sign in').should('exist').click();
    cy.contains('a', 'Settings').should('exist').click();
    cy.contains('button', 'Or click here to logout.').should('exist').click();
    cy.contains('a', 'Sign in').should('exist').click();
    cy.get('[placeholder="Email"]').type(email);
    cy.get('[placeholder="Password"]').type(password);
    cy.contains('button', 'Sign in').should('exist').click();
    cy.contains('a', username).should('exist');
  });
});

