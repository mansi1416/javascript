let num = 121; 
let originalNum = num;
let reversed = 0;
while (num > 0) {
  reversed = reversed * 10 + (num % 10);
  num = Math.floor(num / 10);
}
if (reversed === originalNum) {
  console.log("Palindrome");
} else {
  console.log("Not a palindrome");
}
