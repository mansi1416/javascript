let arr = [1, 2, 3, 4, 5]; 
let sum = arr.reduce((acc, current) => acc + current, 0);
let average = sum / arr.length;
console.log("Average of numbers:", average);
