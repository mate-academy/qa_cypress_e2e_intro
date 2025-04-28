/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const userName = 'jananirj';
    cy.visit('/');

    // click sign in button
    cy.get('a[href = "/user/login"]').should('contain.text', 'Sign in').click();

    // Type email and password and click sign in
    cy.get('input[placeholder="Email"]').type('abc@gmail.com');
    cy.get('input[placeholder="Password"]').type('dummy2');
    cy.get('button[type="submit"]').contains('Sign in').click();

    // assert username after sign in
    cy.get(`a[href="/profile/${userName}"]`).should('exist');
  });
});
