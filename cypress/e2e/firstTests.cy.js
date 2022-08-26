/// <reference types="cypress" />

const username = 'tester_use';

describe('user can log in with valid data', () => {
    it('should open sign in page', () => {
        cy.visit('https://react-redux.realworld.io');

        cy.get(':nth-child(2) > .nav-link')
        .click();
        });

    it ('should fill login and password fields as valid data', () => {
        cy.get(':nth-child(1) > .form-control')
        .type('testallf97@gmail.com');

        cy.get(':nth-child(2) > .form-control')
        .type('Bodape42');
        })

    it ('should click on the sign in button', () => {
    cy.get('.btn')
        .click();
        });

    it ('username should be displayed in header', () => {
        cy.get(':nth-child(4) > .nav-link')
        .should('contain', username);
    })
});
