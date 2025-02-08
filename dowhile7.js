let num = 12345; 
let maxDigit = 0;
do {
  let digit = num % 10;
  if (digit > maxDigit) {
    maxDigit = digit;
  }
  num = Math.floor(num / 10);
} while (num > 0);
console.log("Largest digit:", maxDigit);
