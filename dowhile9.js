let num;
do {
  num = parseInt(prompt("Enter a number (0 to stop):"));
  if (num !== 0) {
    console.log("You entered:", num);
  }
} while (num !== 0);
console.log("Stopped accepting numbers.");
