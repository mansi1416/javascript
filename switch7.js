let character = 'a'; 
switch(true) {
    case /^[a-zA-Z]$/.test(character): console.log("Alphabet"); break;
    case /^[0-9]$/.test(character): console.log("Digit"); break;
    default: console.log("Special Character");
}
