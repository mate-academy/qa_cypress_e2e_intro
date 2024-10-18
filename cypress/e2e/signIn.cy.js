describe('signIn.cy.js', () => {
  it('passes', () => {
    cy.visit('https://conduit.mate.academy/')

    cy.get(':nth-child(2) > .nav-link').should('exist').click();

    cy.url().should('include', '/login')
    cy.get('input[type="email"]').type('testsaliuk12@gmail.com')

    cy.get('input[type="password"]').type('Testsaliuk12@');

    cy.get('button[type="submit"]').click();

    cy.get('.nav-link').should('contain', 'testsaliuk12');
  })
})
