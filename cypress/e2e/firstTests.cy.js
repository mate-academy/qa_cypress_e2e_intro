/// <reference types="cypress" />
const { generateUser } = require("../support/New_user");

const random = Math.random().toString().slice(2, 6);
const username = `username${random}`;
const email = `${username}@mail.com`;
const password = '12345Qwert!';

describe('Basic level', () => {
  it('Succsessfull login valid data ', () => {

    cy.visit (`https://react-redux.realworld.io/#/?_k=bow642`);

    cy.get(':nth-child(2) > .nav-link')
    .click()

    cy.get(':nth-child(1) > .form-control')
    .type('korovka@gmail.com')

    cy.get(':nth-child(2) > .form-control')
    .type ('12344321qqQ!')

    cy.get('.btn')
    .click()

    cy.get('.navbar')
    .should('contain', 'Korovka' )


  });
});
