/// <reference types="cypress" />

const {generateUser} = require ("../support/generateUser.js");

describe('Login page', () => {
  it('should login with valid date', () => {
    cy.visit('https://react-redux.realworld.io');

    cy.get(':nth-child(2) > .nav-link')
     .click();

     cy.get(':nth-child(1) > .form-control')
     .type('qqbybandera@gmail.com');

     cy.get(':nth-child(2) > .form-control')
     .type('qqbybandera');

     cy.get('.btn')
     .click();

     cy.get(':nth-child(4) > .nav-link')
     .should('contain', 'qqbybandera');
  });


  it('should register new user with valid date', () => {
    const { username, email, password } = generateUser();

    cy.visit('https://react-redux.realworld.io');

    cy.get(':nth-child(3) > .nav-link')
     .click();

     cy.get(':nth-child(1) > .form-control')
     .type(username);

     cy.get(':nth-child(2) > .form-control')
     .type(email);

     cy.get(':nth-child(3) > .form-control')
     .type(password);

     cy.get('.btn')
     .click();

     cy.get(':nth-child(4) > .nav-link')
     .should('contain', username);
  });
});
