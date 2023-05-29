/// <reference types="cypress" />

describe('Sign In page', () => {  
  it('should provide an ability to log in', () => {  
    cy.visit('https://react-redux.realworld.io');
      const userName = 'username' + Math.random().toString().slice(2);
      const userEmail = `${userName}@gmail.com`;
      const userPassword = 'Qwerty123!';
    
    cy.get(':nth-child(3) > .nav-link')
      .click();
    cy.get(':nth-child(1) > .form-control')
      .type(userName);
    cy.get(':nth-child(2) > .form-control')
      .type(userEmail);

    cy.get(':nth-child(3) > .form-control')
      .type(userPassword);

    cy.get('.btn')
      .click();

    cy.contains('.nav-link', 'Settings')
      .click();

    cy.get('.btn-outline-danger')
      .click();
    cy.get(':nth-child(2) > .nav-link')
      .click();

    cy.get(':nth-child(1) > .form-control')
      .type(userEmail);

    cy.get(':nth-child(2) > .form-control')
      .type(userPassword);

    cy.contains('.btn', 'Sign in')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', userName);
  });
});
