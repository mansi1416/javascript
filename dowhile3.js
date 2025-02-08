let option;
do {
  option = parseInt(prompt("Choose an option:\n1. Option 1\n2. Option 2\n3. Exit"));
  switch (option) {
    case 1:
      console.log("Option 1 selected");
      break;
    case 2:
      console.log("Option 2 selected");
      break;
    case 3:
      console.log("Exiting...");
      break;
    default:
      console.log("Invalid option, try again.");
  }
} while (option !== 3);
