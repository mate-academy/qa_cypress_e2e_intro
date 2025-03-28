/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/#/login?_k=r8hegh');
  });
  it('should provide an ability to log in', () => {
    const email = 'gogoduck@qa.team';
    const password = 'qwer1234';
    const userName = 'GogoDuck';
    // const user = {email, password };
    // const loginReqUrl = 'https://api.realworld.io/api/users/login';

    // cy.request('POST', loginReqUrl, { user });

    cy.get('h1')
      .should('contain.text', 'Sign In');

    cy.get('[placeholder=Email]')
      .type(email);

    cy.get('[placeholder=Password]')
      .type(password);

    cy.get('.btn').click();

    // cy.url().should('include', Cypress.config().baseUrl + '/#/?_k=');

    cy.get('a')
      .should('contain.text', userName);
  });
});
