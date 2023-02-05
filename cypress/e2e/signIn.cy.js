/// <reference types="cypress" />
const username = 'aasdasdasdq1234';
const email = 'aasdasd@mail.com';
const password = 'pA$$w0rd';

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io'); //зайшов
    cy.get('.nav').contains('Sign in') //найшов посилання в навігаційній панельці
    .click();  //тицьнув

    cy.url().should('include', '/login'); //а де я? здається там де треба

    cy.get('[type="email"]') //сайпрес якісь страшні позивні дає полям, тому шукаю так
    .type(email); //пошта залогіненого юзера

    cy.get('[type="password"]') // те саме що й з поштою
    .type(password);

    cy.get('.btn').contains('Sign in') //шукаю кнопку сайн ін
    .click(); //тицьнув

    cy.wait(1000); //куда гоніш, брад (без затримки наступна строка може зібрати інфу по формі логіну)

    cy.get('.nav').should('contain', username); //перевірка чи залогінився ким треба
  });
});


