/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {

  });
  it('should open the "Sign In" page', () => {
    cy.visit('https://conduit.mate.academy/user/login');

    cy.url().should('include', '/login');

    cy.get('input[type="email"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
  });
  it('should fill in the email and password fields', () => {
    cy.visit('https://conduit.mate.academy/user/login');

    cy.get('input[type="email"]').type('osan1234!@gmail.com');
    cy.get('input[type="password"]').type('osan1234!');

    cy.get('input[type="email"]').should('have.value', 'osan1234!@gmail.com');
    cy.get('input[type="password"]').should('have.value',
      'osan1234!');
  });
  it('should click the "Sign In" button', () => {
    cy.visit('https://conduit.mate.academy/user/login');

    cy.get('input[type="email"]').type('osan1234!@gmail.com');
    cy.get('input[type="password"]').type('osan1234!');

    cy.get('button[type="submit"]').click();

    cy.url().should('not.include', '/login');
  });

  it('should assert the username "osan" link appeared in the header "', () => {
    cy.visit('https://conduit.mate.academy/user/login');

    cy.get('input[type="email"]').type('osan1234!@gmail.com');
    cy.get('input[type="password"]').type('osan1234!');
    cy.get('button[type="submit"]').click();

    cy.get('.nav-link').contains('osan').should('be.visible');
  });
});
