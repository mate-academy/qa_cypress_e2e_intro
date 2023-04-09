/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = "Test21"
  
  beforeEach(() => {
    cy.visit('/login');
  })

  it('should provide an ability to log in',() => {
      cy.findByPlaceholder('Email')
        .type("test21@test.com")

      cy.findByPlaceholder('Password')
        .type("Qwer1!")
      
      cy.contains('button', 'Sign in')
        .click()
      
      cy.assertPageUrl('/')
      
      cy.get('.navbar')
        .contains(username)
        .should('be.visible')
    })
})
