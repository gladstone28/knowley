

function getMoneyRemaining(bankAccount, banknoteDenomination = 100) {
  let remaining = bankAccount % banknoteDenomination; // Gives the remainder after dividing
  return remaining;
}

console.log(getMoneyRemaining(1473, 20)); // 13
console.log(getMoneyRemaining(1250, 50)); // 0
console.log(getMoneyRemaining(534));      // 34


/*
If you intended to find the remainder after withdrawing as many banknotes as possible, you need to use the modulus operator (%):
Corrected Code:

function getMoneyRemaining(bankAccount, banknoteDenomination = 100) {
  let remaining = bankAccount % banknoteDenomination; // Gives the remainder after dividing
  return remaining;
}

console.log(getMoneyRemaining(1473, 20)); // 13
console.log(getMoneyRemaining(1250, 50)); // 0
console.log(getMoneyRemaining(534));      // 34

AI: https://chatgpt.com/c/67afb08a-48bc-8006-9301-117cc2b152d1

knowley: https://app.knowely.com/study/frontend-developer-en/js-basics-en/js-functions-en?learnItemsFilter=All&section=practice&theoryId=1959&testTaskSlug=js_money_remaining_function

*/
