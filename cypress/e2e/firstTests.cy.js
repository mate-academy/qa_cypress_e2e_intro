/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

describe('Conduit:', () => {
  beforeEach(() =>{
    cy.visit('https://react-redux.realworld.io/')
  })

  it('1. Sign in with valid data', () => {
    cy.contains ('Sign in')
      .click()

    cy.get('h1')
      .should('contain.text', 'Sign In')

    cy.get('[placeholder="Email"]')
      .type ('kurtcobain91@mailinator.com')

    cy.get('[placeholder="Password"]')
      .type ('Pass123!')

    cy.get('.btn')
      .click()

    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', 'kurt_c')
  });

  it('2. Sign up with faker', () => {
     const user = generateUser();

    cy.contains ('Sign up')
      .click()
    
    cy.get('h1')
      .should('contain.text', 'Sign Up')

    cy.get('[placeholder="Username"]')
    .type(`${user.username}`)

    cy.get('[placeholder="Email"]')
    .type(`${user.email}`)

    cy.get('[placeholder="Password"]')
    .type(`${user.password}`)

    cy.get('.btn')
    .click()

    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', `${user.username}`)
  });
});
