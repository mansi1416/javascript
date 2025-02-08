// let number = 0;  

// if (number > 0) {
//     console.log("The number is positive.");
// } else if (number<0){
//     console.log("The number is Negative");}
//     else{
//         console.log("Given Number is zero")
//     }
// let marks=45;
// if(marks>90){
//     console.log("A Grade");
// }
// else if(marks>80){
//     console.log("B Grade");
// }
// else if(marks>70){
//     console.log("C Grade");
// }
// else{
//     console.log("Fail");
// }
// let Temp=45;
// if(Tem>90){
//     console.log("Hot");
// }
// else if(Temp>80){
//     console.log("Cold");
// }
// else{
//     console.log("Fail");
// }
// function categorizePerson(age) {
//     if (age >= 0 && age <= 12) {
//       return 'Child';
//     } else if (age >= 13 && age <= 19) {
//       return 'Teenager';
//     } else if (age >= 20 && age <= 64) {
//       return 'Adult';
//     } else if (age >= 65) {
//       return 'Senior Citizen';
//     } else {
//       return 'Invalid age';
//     }
//   }
  

//   let age = 30;
//   let category = categorizePerson(age);
//   console.log(`The person is an: ${category}`);
  
//   function findLargest(num1, num2, num3) {
//     if (num1 >= num2 && num1 >= num3) {
//       return num1;
//     } else if (num2 >= num1 && num2 >= num3) {
//       return num2;
//     } else {
//       return num3;
//     }
//   }
  
  
//   let number1 = 10;
//   let number2 = 25;
//   let number3 = 15;
  
//   let largest = findLargest(number1, number2, number3);
//   console.log(`The largest number is: ${largest}`);
  
// function getTimeOfDay() {
//     let hours = new Date().getHours(); // Get the current hour
  
//     if (hours >= 5 && hours < 12) {
//       return 'Morning';
//     } else if (hours >= 12 && hours < 17) {
//       return 'Afternoon';
//     } else if (hours >= 17 && hours < 20) {
//       return 'Evening';
//     } else {
//       return 'Night';
//     }
//   }
  
 
//   let timeOfDay = getTimeOfDay();
//   console.log(`It is currently: ${timeOfDay}`);
// function getSeason(month) {
//     if (month === 12 || month === 1 || month === 2) {
//       return 'Winter';
//     } else if (month >= 3 && month <= 5) {
//       return 'Spring';
//     } else if (month >= 6 && month <= 8) {
//       return 'Summer';
//     } else if (month >= 9 && month <= 11) {
//       return 'Fall';
//     } else {
//       return 'Invalid month';
//     }
//   }
  
  
//   let month = 3; 
//   let season = getSeason(month);
//   console.log(`The season for month ${month} is: ${season}`);
// function checkTriangleType(side1, side2, side3) {
//     if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
//       return 'Invalid triangle sides';
//     }
  
//     if (side1 === side2 && side2 === side3) {
//       return 'Equilateral';
//     } else if (side1 === side2 || side2 === side3 || side1 === side3) {
//       return 'Isosceles';
//     } else {
//       return 'Scalene';
//     }
//   }
  
 
//   let side1 = 5;
//   let side2 = 5;
//   let side3 = 5;
  
//   let triangleType = checkTriangleType(side1, side2, side3);
//   console.log(`The triangle is: ${triangleType}`);
//   function getDiscount(purchaseAmount) {
//     if (purchaseAmount >= 1000) {
//       return 20;  // 20% discount for purchases of $1000 or more
//     } else if (purchaseAmount >= 500) {
//       return 15;  // 15% discount for purchases of $500 to $999
//     } else if (purchaseAmount >= 200) {
//       return 10;  // 10% discount for purchases of $200 to $499
//     } else if (purchaseAmount >= 100) {
//       return 5;   // 5% discount for purchases of $100 to $199
//     } else {
//       return 0;   // No discount for purchases less than $100
//     }
//   }
  
//
//   let purchaseAmount = 750; // Change this value to test
//   let discount = getDiscount(purchaseAmount);
//   console.log(`The discount for a purchase of $${purchaseAmount} is: ${discount}%`);
// function checkCharacter(char) {
    
//     if (char.length === 1 && /[a-zA-Z]/.test(char)) {
 
//       let lowerChar = char.toLowerCase();
  
//       if (['a', 'e', 'i', 'o', 'u'].includes(lowerChar)) {
//         return 'Vowel';
//       } else {
//         return 'Consonant';
//       }
//     } else {
//       return 'Not a letter';
//     }
//   }
  
 
//   let char = 'a'; 
//   let result = checkCharacter(char);
//   console.log(`The character '${char}' is: ${result}`);
  