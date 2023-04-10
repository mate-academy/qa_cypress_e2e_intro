/// <reference types="cypress" />

describe('Sign In page', () => {
  const randomNumber = Math.floor(Math.random() * 1000);
  const randomUsername = `test-user-${randomNumber}`;
  const randomEmail = `${randomUsername}@gmail.com`;
  const password = 'Test1234';

  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/')
    cy.contains('a', 'Sign up').click()
    cy.get("[placeholder='Email']").type(`${randomEmail}`)
    cy.get("[placeholder='Username']").type(`${randomUsername}`)
    cy.get("[placeholder='Password']").type(`${password}`)
    cy.contains('.btn', 'Sign in').click()
    cy.contains('a', 'Settings').click()
    cy.contains('.btn', 'Or click here to logout.').click()
    cy.contains('a', 'Sign in').click()
    cy.get("[placeholder='Email']").type(`${randomEmail}`)
    cy.get("[placeholder='Password']").type(`${password}`)
    cy.contains('.btn', 'Sign in').click()
    cy.contains('a', randomUsername).should('exist')
  });
});
