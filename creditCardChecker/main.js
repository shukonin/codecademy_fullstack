// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:
const validateCred = (creditCard) => {
  const card = creditCard.map((element) => element);
  const checkDigit = card.pop();
  const cardReversed = card.reverse();
  let round = 1;
  const cardDoubled = cardReversed.map((element) => {
    if (round % 2 === 0) {
      round++;
      return element;
    }
    round++;
    if (element * 2 > 9) {
      return element * 2 - 9;
    } else {
      return element * 2;
    }
  });
  const checkSum =
    checkDigit +
    cardDoubled.reduce((acum, curr) => {
      return acum + curr;
    });
  if (checkSum % 10 === 0) {
    return true;
  } else {
    return false;
  }
};
// batch.forEach(element => console.log(`${element}: ${validateCred(element)}`))

const findInvalidCards = (arrayOfCards) => {
  const invalidCards = [];
  arrayOfCards.forEach((element) => {
    if (!validateCred(element)) invalidCards.push(element);
  });
  return invalidCards;
};
// console.log(findInvalidCards(batch));

const idInvalidCardCompanies = (invalidCards) => {
  const companies = [
    {
      digit: 3,
      name: 'Amex',
    },
    {
      digit: 4,
      name: 'Visa',
    },
    {
      digit: 5,
      name: 'Mastercard',
    },
    {
      digit: 6,
      name: 'Discover',
    },
  ];
  const invalidIssuers = [];
  invalidCards.forEach((card) => {
    let companyFound = 0;
    companies.forEach((company) => {
      if (company.digit === card[0]) {
        companyFound = 1;
        if (!invalidIssuers.includes(company.name)) {
          invalidIssuers.push(company.name);
        }
      }
    });
    if (!companyFound) {
      console.log(`card: ${card}, company not found`);
    }
  });
  return invalidIssuers;
};
// console.log(idInvalidCardCompanies(findInvalidCards(batch)));
