const { generateUser } = require('../support/generate');

describe('Your Second Test', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/register')
  });

  it('Sign up with faker', () => {
    const user = generateUser();

    cy.get('[placeholder="Username"]')
      .type(user.username)

    cy.get('[placeholder="Email"]')
      .type(user.email)

    cy.get('[placeholder="Password"]')
      .type(user.password)

      cy.get('.btn')
      .click()

    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', user.username)
  });
});