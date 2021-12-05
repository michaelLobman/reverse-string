function reverseString(str) {

  const inputArray = str.split("");
  const reverseArray = [];

  for (let i = inputArray.length; i > -1; i--) {

    reverseArray.push(inputArray[i]);

  }

  return reverseArray.join("");

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Problem in my own words

// Write a function that, given a string, returns the given string in reverse,
// i.e., "cat" becomes "tac"

// Test cases include palidromes like "tenet", single-character strings like "m", and empty strings ""

// Please add your pseudocode to this file

// split string into inputArray

// iterating over array, inputArray[i] push into reverse array? 

// can inputArray[i] be pushed into reverseArray as reverseArray[inputArray.length - i]?

// And a written explanation of your solution

// For the function reverseString(str), it takes in one parameter of a string.
// The function splits that string into an array and initializes an empty array
// called reverseArray. For each element in the inputArray beginning with the 
// final element, it is pushed into the reverseArray. When the entire array 
// has been iterated through, the function joins the reverseArray into a string
// and returns that string.
