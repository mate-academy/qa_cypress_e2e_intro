/* eslint-disable */
/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should provide an ability to log in', () => {
    const userName = 'fake'
    const userEmail = 'fake@gmail.com'
    const userPassword = 'Password123'

    cy.get('.nav-link').should('exist').should('contain.text', 'Sign in')
    cy.contains('Sign in').click()

    cy.url().should('include', '/login')
    cy.get('h1').should('contain.text', 'Sign in')

    cy.get('[placeholder=Email]').type(userEmail)

    cy.get('[placeholder=Password]').type(userPassword)

    cy.get('.btn-primary').click()

    cy.get('a.nav-link').should('exist').should('contain.text', userName)
  })
})
