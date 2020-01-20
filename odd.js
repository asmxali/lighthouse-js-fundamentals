const isOdd  = function (num) {
  return num % 2 === 1;
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));

function howManyHundreds(num)
{
  
  return Math.floor(num / 100);
}


console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);