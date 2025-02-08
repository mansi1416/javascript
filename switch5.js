let year = 2024; 
switch(true) {
    case (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)): 
        console.log("Leap Year"); break;
    default: 
        console.log("Not a Leap Year");
}
