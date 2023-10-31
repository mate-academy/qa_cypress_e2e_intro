/// <reference types="cypress" />

describe('Sign In page', () => {
  const userName = 'UserUsername321';
  const email = '3324ffdsd3@i.ua';
  const password = 'Qwerty353421@';

  before(() => {
    cy.visit('https://react-redux.realworld.io');
  });

  it('should sign in with correct credentials', () => {
    cy.get(':nth-child(2) > .nav-link')
      .click();
    cy.get(':nth-child(1) > .form-control')
      .type(email);
    cy.get(':nth-child(2) > .form-control')
      .type(password);
    cy.contains('.btn', 'Sign i')
      .click();
    cy.get(':nth-child(4) > .nav-link')
      .should('contain', userName);
  });
});
