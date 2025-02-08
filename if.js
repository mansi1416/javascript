// let number = 5;  

// if (number > 0) {
//     console.log("The number is positive.");
// } else {
//     console.log("The number is Negative");
// }
// let number =9;
// if(number%2==0){
//     console.log("the number is even");}
//     else{
//         console.log("the number is odd");
//     }

// let age =11;
// if(age<=18){
//     console.log("You Can't Vote Now");
// }else{
//     console.log("Yes You Can Vote");
// }
// let number =200;
// if (number<=100){
//     console.log("Given Number is Less Than 100");
// }
// else{
//     console.log("Given Number is Greater Than 100")
// }

// let person =11;
// if(person>=18){
//    console.log("Person is Adult");
//  }else{
//      console.log("Person Is young");
// }
// function isAdult(age)
// {
//     if (age<=18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const age=34;
// console.log((isAdult)(age));
// function isVowel(character) {
//     if (typeof character === 'string' && character.length === 1) {
//         const vowels = ['a', 'e', 'i', 'o', 'u'];
//         if (vowels.includes(character.toLowerCase())) {
//             console.log(character + " is a vowel.");
//         } else {
//             console.log(character + " is not a vowel.");
//         }
//     } else {
//         console.log("Please enter a single character.");
//     }
// }

// isVowel('b');
// function password(length){
//     if (password.length>=8 && typeof password ==='number'){
//         console.log(true);
//     }
//     else{console.log(false);}
// }
// const pass="1234679";
// length=pass.length;
// password(length);
// function isdivisible(Number){
//     if (number%5==0)
//         {console.log('Yes Divisible By 5');
//          }
//     else{
//         console.log("Not divisible by 5");
//     }
// }
// const number=34;
// isdivisible(number);
// let username = "manasi";
// let password = 12345;

// if (username === "manasi" && password === "12345") {
//     console.log("Log in Successfully");
// } else {
//     console.log("Incorrect username or password");
// }
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a Leap Year");
    } else {
        console.log(year + " is not a Leap Year");
    }
}

const year = 2025;
isLeapYear(parseInt(year));
