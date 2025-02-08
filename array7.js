let arr = [1, 2, 3, 4, 5]; 
let uniqueArr = [...new Set(arr)]; 
uniqueArr.sort((a, b) => b - a); 
let secondLargest = uniqueArr[1];
console.log("Second largest number:", secondLargest);
