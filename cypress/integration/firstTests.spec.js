/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

const faker = require('faker');

describe('Sign in page', () => {
  
  it('Login with valid credentials', () => {
    const user = generateUser();

    cy.request('POST', 'https://api.realworld.io/api/users', {
        "user": {
          "username": user.username,
          "email": user.email,
          "password": user.password
      }
    })
    
    cy.visit('/login')

    cy.get('[placeholder="Email"]')
    .type(user.email)

    cy.get('[placeholder="Password"]')
    .type(user.password)

    cy.get('.btn')
    .contains('Sign in')
    .click()

    cy.get(':nth-child(4) > .nav-link')
    .should('contain', user.username)
  });

  it('New user registration ', () => {
    const randomNumber = Math.random().toString().slice(2,6)
    const username = faker.internet.userName() + randomNumber
    const email = username + '@gmail.com'
    const password = faker.internet.password()

    cy.visit('/register')

    cy.get('[placeholder="Username"]')
    .type(username)

    cy.get('[placeholder="Email"]')
    .type(email)

    cy.get('[placeholder="Password"]')
    .type(password)

    cy.get('.btn')
    .contains('Sign in')
    .click()

    cy.get(':nth-child(4) > .nav-link')
    .should('contain', username)
  });
});
