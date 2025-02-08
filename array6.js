let arr = [1, 2, 2, 3, 2, 4, 5]; 
let target = 2; 
let count = arr.filter(num => num === target).length;
console.log(`${target} appears ${count} times in the array.`);
