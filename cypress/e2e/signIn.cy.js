/// <reference types="cypress" />

const username = 'nemy@mailinator.com'
const password = 'Pa$$w0rd!'

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {

    //cy.visit('/');
    cy.visit('https://react-redux.realworld.io');

    cy.get(':nth-child(2) > .nav-link').should('contain.text', 'Sign in');

    cy.get(':nth-child(2) > .nav-link').click()

    .url().should('include', '/login');

    cy.get(':nth-child(1) > .form-control').type(username, { delay: 100 });

    cy.get(':nth-child(2) > .form-control').type(password, { delay: 100 });

    cy.get('.btn').click();
    
    cy.get(':nth-child(4) > .nav-link').should('contain.text', 'Dolorem quod molesti');
  });

})
