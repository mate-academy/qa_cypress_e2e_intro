/// <reference types="cypress" />

describe('Sign In page', () => {  
  const username = 'delta2024';
  const email = 'delta2024@ukr.net';
  const password = 'cvRejected2024';
  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/user/login');
    cy.get('[placeholder=Email]')
    .type(email);
    cy.get('[placeholder=Password]')
      .type(password);

    cy.get('.btn')
    .click();

    cy.get(':nth-child(4) > .nav-link').should('contain', username);
  });
  
});
