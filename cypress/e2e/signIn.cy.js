/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach('', () => {
    cy.visit('/#/login')
  })

  it('should provide an ability to log in', () => {
    const rendomNum = Math.random().toString().slice(2);
    const username = 'test_user-' + rendomNum;
    const password = 'test-1234';
    const email = username + '@mail.com';

    cy.get('h1')
      .should('contain.text', 'Sign In');

    cy.visit('/#/register')

      cy.get('[placeholder="Username"]')
      .type(username)

    cy.get('[placeholder="Email"]')
      .type(email)

    cy.get('[placeholder="Password"]')
      .type(password)

    cy.contains('.btn', 'Sign in')
      .click()
    
    cy.contains('a', ' Settings')
      .click()

    cy.contains('button', 'Or click here to logout.')
      .click()

    cy.contains('a', 'Sign in')
      .click()

    cy.get('[placeholder="Email"]')
      .type(email)

    cy.get('[placeholder="Password"]')
      .type(password)

    cy.contains('.btn', 'Sign in')
      .click()

    cy.contains('a', `${username}`)
      .should('exist')
  });
});
