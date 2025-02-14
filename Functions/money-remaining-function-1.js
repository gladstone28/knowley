
function getMoneyRemaining(bankAccount, banknoteDenomination = 100){
let remaining = (bankAccount - banknoteDenomination);
return remaining;
}

console.log(getMoneyRemaining(1473,20)); // 1453
console.log(getMoneyRemaining(1250,50)); // 1200
console.log(getMoneyRemaining(534));     // 434 (uses default 100)
