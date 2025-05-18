/// <reference types="cypress" />

const { generateUser } = require('../support/generateUser');

describe('Sign In page', () => {
  const { userEmail, password } = generateUser();

  it('should provide an ability to log in', () => {
    cy.visit('/');
    cy.get(':nth-child(2) > .nav-link')
      .should('exist')
      .should('contain.text', 'Sign in');
  });

  it('should redirect user to login page after click', () => {
    cy.visit('/');
    cy.get(':nth-child(2) > .nav-link').click();
    cy.url().should('include', '/login');
    cy.get(':nth-child(1) > .form-control').should('exist');
    cy.get(':nth-child(2) > .form-control').should('exist');
  });

  it('should require all fields to be filled in', () => {
    cy.visit('/user/login');
    cy.get(':nth-child(1) > .form-control').type(userEmail);

    cy.get('.btn').click();

    cy.get('.error-messages > :nth-child(1)')
      .should('exist')
      .should('contain.text', `password:can't be blank`);

    cy.get(':nth-child(1) > .form-control').clear();
    cy.get(':nth-child(2) > .form-control').type(password);

    cy.get('.btn').click();

    cy.get('.error-messages > :nth-child(1)')
      .should('exist')
      .should('contain.text', `email:can't be blank`);
  });

  it('should reject login if user is not exist', () => {
    cy.visit('/user/login');
    cy.get(':nth-child(1) > .form-control').type(userEmail);
    cy.get(':nth-child(2) > .form-control').type(password);

    cy.get('.btn').click();

    cy.get('.error-messages > :nth-child(1)')
      .should('exist')
      .should('contain.text', `email or password:is invalid`);
  });

  it('should accept login if user is exist', () => {
    cy.visit('/user/login');
    cy.get(':nth-child(1) > .form-control').type('mikalaj.krutak@gmail.com');
    cy.get(':nth-child(2) > .form-control').type('2483112');

    cy.get('.btn').click();

    cy.get('.error-messages > :nth-child(1)').should('not.exist');

    cy.url().should('eq', 'https://conduit.mate.academy/');

    cy.get(':nth-child(4) > .nav-link').should('exist');
  });

  it('should have an account options after login', () => {
    cy.visit('/user/login');
    cy.get(':nth-child(1) > .form-control').type('mikalaj.krutak@gmail.com');
    cy.get(':nth-child(2) > .form-control').type('2483112');

    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link')
      .should('exist')
      .should('contain.text', 'mykola')
      .click();

    cy.url().should('include', 'mykola');
  });
});
