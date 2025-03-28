/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
//Open the main page and check if it is main page    
cy.visit('https://conduit.mate.academy/');
cy.get('h1')
.should('contain.text', 'conduit');
// Sign in page
cy.get('.navbar').get('a').contains('Sign in').click();
cy.url().should('contain', '/user/login');
cy.get('h1').should('contain.text', 'Sign in');
cy.title().should('contain', 'Sign in');
cy.get('body').should('contain','form');
cy.get('body form').should('exist');
//Fill in the Email address and verify
cy.get('input[placeholder=Email]').type('user13a@interia.pl');
cy.get('input[placeholder=Password]').type('nokia5000');
//Sign in and verify
cy.get('button').contains('Sign in').click();
cy.get('.navbar').get('a').contains('user13a');
cy.get('.navbar').get('a').contains('Settings');
cy.get('.navbar').get('a').contains('New Article');
cy.get('.navbar').get('a').contains('Home');
cy.get('body').get('a').contains('Your Feed');
cy.get('body').get('a').contains('Global Feed');
 });
});
