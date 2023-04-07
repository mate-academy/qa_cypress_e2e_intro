/// <reference types="cypress" />

describe('Sign in page', () => {

  it('should allow a user to sign in with credentials', () => {

    // first we register a new user   

    const randomNumber = Math.floor(Math.random() * 1000)
    const username = `test_user${randomNumber}`
    const email = `${username}@hotmail.com`
    const password = 'Qwerty1!'

    cy.visit('https://react-redux.realworld.io')

    cy.contains('a', 'Sign up')
      .click()

    cy.get('[placeholder="Username"]')
      .type(username)

    cy.get('[placeholder="Email"]')
      .type(email)

    cy.get('[placeholder="Password"]')
      .type(password)

    cy.contains('.btn', 'Sign in')
      .click()

    //then we need to log out
    cy.contains('a', 'Settings')
      .click()

    cy.contains('.btn', 'Or click here to logout.')
      .click()

    // then we sign in with created credentials

    cy.contains('a', 'Sign in')
      .click()

    cy.get('[placeholder="Email"]')
      .type(email)

    cy.get('[placeholder="Password"]')
      .type(password)

    cy.contains('.btn', 'Sign in')
      .click()

    // here we do some checks to see if the user is logged in

    cy.contains('a', 'Your Feed')
      .should('exist');

    cy.contains('a', username)
      .should('exist');

  });
});
