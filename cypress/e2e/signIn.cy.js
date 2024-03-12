/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should ', () => {
    // Відвідати сторінку "Sign in"
    cy.visit('https://react-redux.realworld.io/#/login?_k=rju52v');

    // Заповнити поле електронної пошти коректними даними
    cy.get('input[placeholder="Email"]').type('proficypress@gmail.com');

    // Заповнити поле пароля коректними даними
    cy.get('input[placeholder="Password"]').type('cypress2024!');

    // Натиснути кнопку "Sign In"
    cy.get('button[type="submit"]').click();

    // Перевірити, що ім'я користувача з'явилося у меню навігації
    cy.get('a[class="nav-link"]').should('contain.text', 'Profi');
  });
});
