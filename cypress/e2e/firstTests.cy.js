/// <reference types="cypress" />

const username = 'tester_use';

describe('user can log in with valid data', () => {
    it('should allow to login with valid data', () => {
        cy.visit('https://react-redux.realworld.io');

        cy.get(':nth-child(2) > .nav-link')
        .click();

        cy.get(':nth-child(1) > .form-control')
        .type('testallf97@gmail.com');

        cy.get(':nth-child(2) > .form-control')
        .type('Bodape42');

        cy.get('.btn')
        .click();

        cy.get(':nth-child(4) > .nav-link')
        .should('contain', username);
    })
});
