const Threshold = 200;
const SalesTax = 0.08;
const Phone = 99.99;
const Accessory = 9.99;

bankAccount = promt("please enter current acount funds:");
let amount = 0;

function purchaseAmount(amount){
  if (amount >= Threshold) {
    amount = Phone * 2
    return amount;
  }
}

function calculateTax(amount){
  return amount * SalesTax;
}

function formatAmount(amount){
  return "$" + amount.toFixed(2)
}

// keep buying phones
while (amount < bankAccount){
  amount= amount + Phone
  
  if (amount < Threshold)
  amount = amount + Accessory
}

amount = amount + calculateTax(amount)

console.log("Your purchase: ") + formatAmount(amount);

if(amount > bankAccount){
  console.log("You can't afford this purchase. :(");
}
