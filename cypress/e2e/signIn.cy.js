/// <reference types="cypress" />
const randomNumber = Math.floor(Math.random(1000) * 1000);
const username = `testuser${randomNumber}`;

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/register')
  });
  it('should provide an ability to log in', () => {
    cy.get(':nth-child(1) > .form-control').type(username);

    cy.get(':nth-child(2) > .form-control').type(`${username}@qa.team`);

    cy.get(':nth-child(3) > .form-control').type(`Pass_${username}`);

    cy.contains('.btn', 'Sign up').click();

    cy.get(':nth-child(4) > .nav-link').should('contain', username);
  });
});
