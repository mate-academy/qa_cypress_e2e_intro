/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const userName = 'testingUser8';

    cy.visit('/#/')
      .contains('a', 'Sign in')
      .should('exist')
      .click();

    cy.get('[placeholder="Email"]')
      .type(`${userName}@mail.com`);

    cy.get('[placeholder="Password"]')
      .type('Zxc123???');
      
    cy.get('.btn')
      .click();   

    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', `${userName}`);
      
  });
});
