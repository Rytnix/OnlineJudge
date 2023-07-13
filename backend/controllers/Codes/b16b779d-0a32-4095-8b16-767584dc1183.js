// import readline module
const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// create empty user input
let userInput = "";

// question user to enter name
rl.question("What is your name\n", function (string) {
  userInput = string;

  console.log("Your name is " + userInput);

  // close input stream
  rl.close();
});