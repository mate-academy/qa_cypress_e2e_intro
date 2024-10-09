 ///<reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/user/login');
    cy.url().should('include', '/login');

  });

  it('should succesfully submit the email and password fields', () => {
    cy.visit('https://conduit.mate.academy/user/login');

    cy.get('input[type="email"]').click().type('osan12345!@gmail.com');
    cy.get('input[type="password"]').click().type('Osan12345');
    cy.get('button[type="submit"]').click();
  });

  it('should assert the username "osan" link appeared in the header "', () => {
    cy.visit('https://conduit.mate.academy/user/login');

    cy.get('input[type="email"]').type('osan12345!@gmail.com');
    cy.get('input[type="password"]').type('Osan12345');
    cy.get('button[type="submit"]').click();

    cy.get('.nav-link').contains('osan').should('be.visible');
  });
});

