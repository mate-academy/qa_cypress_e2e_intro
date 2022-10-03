const { generateUser } = require('../support/generate');

describe('Sign Up', () => {
  before(() => {
    cy.visit('https://react-redux.realworld.io')
  });

  it('with faker', () => {
    const {username, email, password} = generateUser()

    cy.get(':nth-child(3) > .nav-link')
    .click();

    cy.get(':nth-child(1) > .form-control')
    .type(username)

    cy.get(':nth-child(2) > .form-control')
    .type(email);

    cy.get(':nth-child(3) > .form-control')
    .type(password);

    cy.get('.btn')
    .click();

    cy.get(':nth-child(4) > .nav-link')
    .should('contain', username);
  });
});