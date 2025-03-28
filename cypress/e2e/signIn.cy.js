/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=xttsry');
    //Fill in email and password fields
    cy.get(':nth-child(1) > .form-control').type('mayMAYqa@gmail.com');
    cy.get(':nth-child(2) > .form-control').type('4321QAqa');
    //Click on the Sign In button
    cy.get('.btn').click();
    //Assert that the username appears in the header
    cy.get(':nth-child(4) > .nav-link').should('contain', 'mayMAYqa');
  });
  
});
