/* Directions:
- Given a String, return a new String with the reversed order of characters.
- We must convert the input to Strings first for it to work with Integers. 
*/

/*---------- 1st solution ----------*/
// Using the older JavaScript syntax

function reverse(input) {
  let reversedInput = "";

  for (let i = 0; i < input.length; i++) {
    reversedInput = text[i] + reversedInput;
  }

  return reversedInput;
}

console.log(reverse("Hello world!")); //Output: !dlrow olleH

/*---------- 2nd solution ----------*/
// Using the newer JavaScript syntax

function reverse(input) {
  let reversedInput = "";

  for (let char of input) {
    reversedInput = char + reversedInput;
  }

  return reversedInput;
}

console.log(reverse("Hello world!")); //Output: !dlrow olleH

/*---------- 3nd solution ----------*/
// Using the built in reverse() function

/*
- It only works with arrays.
- We must convert the input into an array to be able to use it.
- Once it's reversed, we must convert the input again to String
*/

function reverseStr(input) {
  return input.split("").reverse().join("");
}

console.log(reverse("Hello world!")); //Output: !dlrow olleH
