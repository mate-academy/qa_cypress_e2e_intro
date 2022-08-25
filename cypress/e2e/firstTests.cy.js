/// <reference types="cypress" />

describe('Login page', () => {
  it('should login with valid date', () => {
    cy.visit('https://react-redux.realworld.io');

    cy.get(':nth-child(2) > .nav-link')
     .click()

     cy.get(':nth-child(1) > .form-control')
     .type('qqbybandera@gmail.com');

     cy.get(':nth-child(2) > .form-control')
     .type('qqbybandera');

     cy.get('.btn')
     .click()

     cy.get(':nth-child(4) > .nav-link')
     .should('contain', 'qqbybandera');
  });
});
