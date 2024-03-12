/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to sign in ', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=rju52v');
    cy.get('input[placeholder="Email"]').type('proficypress@gmail.com');
    cy.get('input[placeholder="Password"]').type('cypress2024!');
    cy.get('button[type="submit"]').click();
    cy.get('a[class="nav-link"]').should('contain.text', 'Profi');
  });
});
