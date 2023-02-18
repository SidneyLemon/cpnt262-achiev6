// Don't forget prompt() always returns a string, even for numbers
const number = prompt("string0");

// Step 1: Rearrange the console logs so that the statements are correct

// 134: "The number is greater than 100"
if (number > 100) {
  console.log("The number is greater than 100");
}

// 5: "The number is between 1 and 100"
else if (number > 0 && number < 101) {
  console.log("The number is between 1 and 100");
}

// 0: "The number is 0"
else if (`number === 0`) {  
  const string0 = 'The number is 0';
  console.log("The number is 0");
} 

// -10 "The number is negative"
else {
  console.log("The number is negative");
}


// Step 2: Test and refactor your code to ensure these conditional statements are operating correctly
// Don't forget to test zero!
// Hint: Remember that numbers can also be strings.


