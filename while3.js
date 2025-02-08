let num = 123; // Example number
let sum = 0;
while (num > 0) {
  sum += num % 10;
  num = Math.floor(num / 10);
}
console.log(sum);
