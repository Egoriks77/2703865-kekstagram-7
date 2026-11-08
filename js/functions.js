/* eslint-disable no-unused-vars */
const checkStringLength = (line, lengthLine) => line.length <= lengthLine;

function isPalindrome(line) {
  const cleanLine = line.toLowerCase().replaceAll(' ', '');

  for (let i = 0; i < cleanLine.length / 2; i++) {
    if (cleanLine[i] !== cleanLine[cleanLine.length - i - 1]) {
      return false;
    }
  }

  return true;
}

function getNumbers(line) {
  const safeLine = line.toString();
  let numberInLine = '';

  for (const part of safeLine) {
    if (!Number.isNaN(parseInt(part, 10))) {
      numberInLine += part;
    }
  }

  return numberInLine === '' ? NaN : parseInt(numberInLine, 10);
}
