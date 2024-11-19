/// <reference types="cypress" />


describe('Demoblaze E2E Tests', () => {

  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
});

  it('Should register a new user', () => {
    cy.contains('#signin2', 'Sign up').click()
    cy.get('#sign-username').type('MarkelKo')
    cy.get('#sign-password').type('Qwert123@')
    cy.get('button').contains('Sign up').click()
  });

  it('Should log in with an existing user', () => {
    cy.contains('#login2', 'Log in').click()
    cy.get('#loginusername').type('MarkelKo')
    cy.get('#loginpassword').type('Qwert123@')
    cy.get('button').contains('Log in').click()
  });

  it('Should add Samsung Galaxy s6 to the cart', () => {
    cy.contains('Samsung galaxy s6').click()
    cy.contains('Add to cart').click()
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Product added')
    })
  });
});