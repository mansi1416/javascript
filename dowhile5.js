let num = 12345; 
let reversed = 0;
do {
  reversed = reversed * 10 + (num % 10);
  num = Math.floor(num / 10);
} while (num > 0);
console.log("Reversed number:", reversed);
