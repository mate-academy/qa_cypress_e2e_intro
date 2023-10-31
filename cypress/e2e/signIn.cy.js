/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login');
  });
  it('should provide an ability to log in', () => {
    cy.get(':nth-child(1) > .form-control').type('kristinatest24@gmail.com');
    cy.get(':nth-child(2) > .form-control').type('Qwer123@');
    cy.get('.btn').click();
    
    cy.get(':nth-child(4) > .nav-link').should('contain', 'kristinatest24');  
  });
});
