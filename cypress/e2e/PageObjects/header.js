export default class Header {
  checkHeaderUsername(username) {
    cy.get(`a[href="#@${username}"]`).should("contain.text", username);
  }
}
