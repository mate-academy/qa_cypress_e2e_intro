export default class Header {
  getProfileMenu(username) {
    return cy.contains('a.nav-link', username).should('be.visible');
  }
}
