// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/**
 * @param {number} length
 * @param {string} specialCharacter
 * @param {boolean} randomUpperCase
 * @param {boolean} oneUpperCase
 * @returns {string}
 */

function generateRandomString
(length = 8, specialCharacter = '~`#$%^&*()_+=',
  randomUpperCase = true, oneUpperCase = true) {
  const haveMinLength = length > 3;
  const hasSpecialCharacter = (typeof specialCharacter === 'string')
    ? specialCharacter.match(/[^\w\d\s\p{Letter}@]/gu) !== null
    : false;
  const properSpecialCharacters = hasSpecialCharacter
    ? specialCharacter.match(/[^\w\d\s\p{Letter}@]/gu).join('')
    : false;
  const hasRandomUpperCase = randomUpperCase === true;
  let howManySpecialCharacter;
  let generatedUserName = '';

  if (!haveMinLength) {
    throw new Error(`Username has less than 4 letters`);
  }

  if (hasSpecialCharacter === true) {
    const balance = length - properSpecialCharacters.length;

    switch (Math.sign(balance)) {
      case 1:
        howManySpecialCharacter = properSpecialCharacters.length;

        break;
      case 0:
        howManySpecialCharacter = properSpecialCharacters.length - 1;

        break;
      case -1:
        howManySpecialCharacter =
            properSpecialCharacters.length - (Math.abs(balance) + 1);

        break;
    };
  } else {
    howManySpecialCharacter = 0;
  }

  const letters = (() => {
    const lowerCase = 'qwertyuioplkjhgfdsazxcvbnm';

    if (hasRandomUpperCase === true) {
      const upperCase = lowerCase.toUpperCase();

      return [...lowerCase, ...upperCase];
    }

    return [...lowerCase];
  })();
  const loopEnd1 = length - howManySpecialCharacter;

  for (let i = 0; i < loopEnd1; i++) {
    const randomLetterIndex = Math.floor(Math.random() * letters.length);

    if (i === 0 && oneUpperCase === true) {
      generatedUserName += letters[randomLetterIndex].toUpperCase();
    } else {
      generatedUserName += letters[randomLetterIndex];
    }
  }

  if (hasSpecialCharacter === true) {
    for (let i = loopEnd1, i2 = 0; i < length; i++, i2++) {
      generatedUserName += properSpecialCharacters[i2];
    }
  }

  return generatedUserName;
}

module.exports = { generateRandomString };
