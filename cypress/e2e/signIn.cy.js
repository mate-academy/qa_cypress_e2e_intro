/* eslint-disable no-lone-blocks */
// import { faker } from '@faker-js/faker';

// eslint-disable-next-line block-spacing
{
  /* <reference types="cypress" />; */
}

const { createRandomUser } = require('../support/commands.js');

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const { username, email, password } = createRandomUser();
    cy.visit('https://react-redux.realworld.io');
    cy.contains('Sign up').click();
    cy.get('input[placeholder="Username"]').type(username);
    cy.get('input[placeholder="Email"]').type(email);
    cy.get('input[placeholder="Password"]').type(password);
    cy.get('button').contains('OK').click();
    cy.contains('Settings').click();
    cy.contains('log out').click();

    cy.contains('Sign in').click();
    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);
    cy.get('button').contains('Sign in').click();
    cy.get('nav').contains(username).should('be.visible');
  });
});
