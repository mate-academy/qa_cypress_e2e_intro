/// <reference types="cypress" />
const { generateUser } = require("../support/generate");

describe('Sign in', () => {
  beforeEach(()=>{
    cy.visit('/#/register')
  });
  it('User should log in with data have registrate before and username appeared in "Header" menu', () => {
    const {email, username, password} = generateUser();
    cy.request('POST', 'https://api.realworld.io/api/users', {
      user: {username, email, password}
    });
    cy.visit('/#/login')
    cy.get('[placeholder="Email"]')
    .type(email)

    cy.get('[placeholder="Password"]')
    .type(password)

    cy.contains('.btn', 'Sign in')
    .click();
    cy.get(':nth-child(4) > .nav-link')
    .should('contain', username)

  });
describe('Second Test - Sign up with faker', () => {
  it('User should registrate with faker data and username appeared in "Header" menu', () => {
    const {email, username, password} = generateUser();
    cy.get('[placeholder="Username"]')
    .type(username)
    cy.get('[placeholder="Email"]')
    .type(email)
    cy.get('[placeholder="Password"]')
    .type(password)

    cy.contains('.btn', 'Sign in')
    .click();
    cy.get(':nth-child(4) > .nav-link')
    .should('contain', username)
  });
});
})
