import LoggedInUser from "../support/pages/LoggedInUser";

describe('Sign in page checks', () => {
    it('Can sign in with valid data', () => {
        const loggedInUser = new LoggedInUser()

        cy.visit("/")
        cy.get('a.nav-link').contains('Sign up').click()
        cy.get('input[placeholder="Username"]').type('Wrtey6123')
        cy.get('input[placeholder="Email"]').type('Wrtey6123@mail.com')
        cy.get('input[placeholder="Password"]').type('testUser123')
        cy.get('button[type="submit"]').click()
        loggedInUser.getHeader().should('contain', 'Wrtey6123');
    });
});
