/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const email = 'valeriiaqa@mail.com';
    const password = 'Pass123';
    const username = 'valeriiaqa';
    cy.visit('/');
    cy.get('[href="#login"]').click();
    cy.get('[placeholder="Email"]').type(email);
    cy.get('[placeholder="Password"]').type(password);
    cy.get('[type="submit"]').click();
    cy.get('[class="nav navbar-nav pull-xs-right"]').should('contain.text', `${username}`);
  });
});
