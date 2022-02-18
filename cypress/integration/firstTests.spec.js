/// <reference types="cypress" />
const faker = require('faker');
const { generateUser } = require('../support/generate');

describe('Registration and autorization', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/register')
  });

  it.only('Registration and autorization test', () => {
    const { email, password, username} = generateUser()

    cy.get('[placeholder="Username"]')
      .type(username);

    cy.get('[placeholder="Email"]')
      .type(email);

    cy.get('[placeholder="Password"]')
      .type(password);

    cy.contains('.btn', 'Sign in')
      .click();

    cy.get(`[href="#@${username}"]`)
      .click();

    cy.get('.btn')
      .click();

    cy.get('.btn-outline-danger')
      .click();

    cy.get('[href="#login"]')
      .click();

    cy.get('[placeholder="Email"]')
      .type(email);

    cy.get('[placeholder="Password"]')
      .type(password);

    cy.get('.btn')
      .click();

    cy.get(`[href="#@${username}"]`)
      .should('contain.text', `${username}`);
  });
});