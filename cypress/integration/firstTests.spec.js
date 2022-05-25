/// <reference types="cypress" />

describe('Sign in', () => {
  beforeEach(() =>
    cy.visit('/#/login')
  )
  const username = 'test_yumi'
  const email = `${username}@mail.com`
  const password = 'Pa$$w0rd!1'

  it('should open Sign In page', () => {
    cy.url()
    .should('include', '/login')
          
    cy.get('h1')
    .should('contain.text', 'Sign In')
  });
  
  it('should allow log into the account', () => {
    cy.get(`input[placeholder='Email']`)
      .click()
      .type(email)
      .should('have.value', email)

    cy.get(`input[placeholder='Password']`)
      .click()
      .type(password)
      .should('have.value', password)

    cy.get(`button[type='submit']`)
      .should('contain.text', 'Sign in')
      .click()

    cy.get(`a[href='#@${username}']`)
      .should('contain.text', username)     
  });
});
