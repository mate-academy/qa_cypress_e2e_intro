/// <reference types="cypress" />

import { generateUser } from '../support/generateUser';

describe('Sign In page', () => {
  const { username, email, password } = generateUser();

  it('should register and log out', () => {
    cy.request({
      method: 'POST',
      url: 'https://conduit.mate.academy/api/users',
      body: {
        user: {
          username,
          email,
          password
        }
      }
    });
  });

  it('should provide an ability to log in', () => {
    cy.visit('/login');
    cy.get('h1').should('contain.text', 'Sign in');

    cy.getPlaceHolder('Email').type(email);
    cy.getPlaceHolder('Password').type(password);
    cy.get('button').contains('Sign in').click();

    cy.contains('.nav-link', 'Settings').should('exist');
  });
});
