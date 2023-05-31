/// <reference types="cypress" />

/// <reference types="cypress" />

const email = 'cypresstest@qa.com';
const password = 'cypresstestqa';
const username = 'Test Username';

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {

  });
});
    cy.visit('https://react-redux.realworld.io/')

    cy.contains('Sign in')
      .click()

    cy.get('[placeholder="Email"]')
      .type(email)

    cy.get('[placeholder="Password"]')
      .type(password)

    cy.contains('.btn', 'Sign in')
      .click()

    cy.get(':nth-child(4) > .nav-link')
     .should('contain', username);
