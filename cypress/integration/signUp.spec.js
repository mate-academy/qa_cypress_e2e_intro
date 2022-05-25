/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

describe('Sign up form', () => {
    it('should be visitable', () => {
        const user = generateUser();
        cy.visit('https://react-redux.realworld.io');

        cy.get(':nth-child(3) > .nav-link')
        .click();

        cy.url().should('include', '/register');

        cy.get(':nth-child(1) > .form-control')
        .type(user.username)
        .should('have.value', user.username);

        cy.get(':nth-child(2) > .form-control')
        .type(user.email)
        .should('have.value', user.email);

        cy.get(':nth-child(3) > .form-control')
        .type(user.password)
        .should('have.value', user.password);

        cy.get('.btn')
        .contains('Sign in')
        .click();

        cy.get(':nth-child(4) > .nav-link')
        .contains(user.username);
    });
  
});