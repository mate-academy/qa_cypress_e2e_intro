/// <reference types="cypress" />
import { email, password, username } from '../support/validData.js';

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io');
    cy.get('a.nav-link[href="#login"]').click();

    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);

    cy.get('button[type="submit"]').click();

    cy.get(':nth-child(4) > .nav-link')
      .should('exist')
      .should('include.text', username);
  });
});
