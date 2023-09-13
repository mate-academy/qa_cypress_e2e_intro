/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should Sign In on the website page', () => {
    cy.visit('https://react-redux.realworld.io/#/login')
      .get('h1')
      .should('contain.text', 'Sign In');
    //  Test case for checking current page location

    cy.get('[placeholder="Email"]')
      .type('kaktotak@gasd.com');
    //  Test case for filled in "Email" field

    cy.get('[placeholder="Password"]')
      .type('1234567890');
    //  Test case for filled in "Password" field

    cy.contains('button', 'Sign in').click();
    //  Test case for clicking on the "Sign in" button

    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', 'Testmate');
    //  Test case for checking usrname on a first website page
  });
});
