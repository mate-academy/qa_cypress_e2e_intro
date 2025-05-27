/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  const randomDigits = Math.random().toString().slice(2, 6);
  const username = faker.person.lastName().toLocaleLowerCase();
  const email = faker.internet.email().toLocaleLowerCase();
  const password = faker.internet.password() + randomDigits;
  //   // register

  //   cy.contains('a', 'Sign up').click();

  //   cy.url().should('include', '/user/register');

  //   cy.get('[placeholder="Username"]').should('be.visible').type(userName);
  //   cy.get('[placeholder="Email"]').should('be.visible').type(email);
  //   cy.get('[placeholder="Password"]').should('be.visible').type(password);

  //   cy.get('button').contains('Sign up').click();

  //   cy.contains('a', 'Setting').click();
  //   cy.get('button').contains('Or click here to logout.').click();

  //   // login

  //   cy.contains('a', 'Sign in').click();

  //   cy.url().should('include', '/user/login');

  //   cy.get('[placeholder="Email"]').should('be.visible').type(email);
  //   cy.get('[placeholder="Password"]').should('be.visible').type(password);

  //   cy.get('button').contains('Sign in').click();
  // });

  // it('should provide the opportunity to register', () => {
  //   cy.contains('a', 'Sign up').click();

  //   cy.url().should('include', '/user/register');

  //   cy.get('[placeholder="Username"]').should('be.visible').type(userName);
  //   cy.get('[placeholder="Email"]').should('be.visible').type(email);
  //   cy.get('[placeholder="Password"]').should('be.visible').type(password);

  //   cy.get('button').contains('Sign up').click();

  //   cy.contains('a', 'Setting').click();
  //   cy.get('button').contains('Or click here to logout.').click();
  // });

  it('should provide an ability to log in', () => {
    cy.request('POST', 'https://conduit.mate.academy/api/users', {
      user: {
        username,
        email,
        password
      }
    });

    cy.contains('a', 'Sign in').click();

    cy.url().should('include', '/user/login');

    cy.get('[placeholder="Email"]').should('be.visible').type(email);
    cy.get('[placeholder="Password"]').should('be.visible').type(password);

    cy.get('button').contains('Sign in').click();
    cy.contains('a', `${username}`).should('exist');
  });
});
