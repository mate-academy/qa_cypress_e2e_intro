/// <reference types="cypress" />
const userData ={
  name: 'Test33',
  email: 'Test1234@gmail.com',
  password: 'Qwerty_123q'

}
describe('User should be able', () => {
  it('To sign in with valid data', () => {
    cy.visit('localhost:1667/#/login');

    cy.get(':nth-child(1) > .form-control')
      .type(userData.email);

      cy.get(':nth-child(2) > .form-control')
      .type(userData.password);

      cy.get('.btn')
      .click();

      cy.get(':nth-child(4) > .nav-link')
      .should('contain', userData.name)


  });
});

const { generateUser } = require('../support/generate');

describe('User should be able', () => {

  it('Sign up with valid data', () => {
    const user = generateUser();
    cy.visit('localhost:1667/#/register');

    cy.get(':nth-child(1) > .form-control')
    .type(user.username);
    
    cy.get(':nth-child(2) > .form-control')
    .type(user.email);

    cy.get(':nth-child(3) > .form-control')
    .type(user.password);

    cy.get('.btn')
      .click();

    cy.get('.swal-button')
    .click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain', user.username);


    
    
  });
});
