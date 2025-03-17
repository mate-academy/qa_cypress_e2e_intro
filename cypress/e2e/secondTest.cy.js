/// <reference types="cypress" />
const { generateUser } = require('../support/generate');
describe('Conduit Sign Up', () => {
    before(() =>{
        cy.visit('https://react-redux.realworld.io/#/register');
    });
     it('Conduit Sign Up', () => {
        const user = generateUser();
        
        cy.get('[placeholder="Username"]')
            .type(user.username);
        cy.get('[placeholder="Email"]')
            .type(user.email);
        cy.get('[placeholder="Password"]')
            .type(user.password);
        
        cy.contains('.btn', 'Sign in')
            .click();
        
        cy.get(':nth-child(4) > .nav-link')
            .should('contains.text', user.username);
        });
    
});