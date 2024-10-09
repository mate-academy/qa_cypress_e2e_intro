/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const username = 'try';
    const email = 'oaao@gmail.com';
    const password = '1234qaz';

    cy.visit('https://conduit.mate.academy/login');

    cy.get(':nth-child(1) > .form-control').type(email);
    cy.get(':nth-child(2) > .form-control').type(password);

    cy.get('.btn').click();

    cy.get('.navbar').should('contain', username);
  });
});
