/*  Directions:
- Palindromes are words that form the same word if they're reversed.
- Given a string, return True if a String is a palindrome or False if it's not.
*/

/*  Examples:
- palindrome("madam") === true
- palindrome("kayak") === true
- palindrome("hello") === false     (reversed = "olleh")
*/

function palindrome(input) {
  const reversedInput = input.split("").reverse().join("");

  if (input === reversedInput) {
    return true;
  } else {
    return false;
  }
}

console.log('"madam" is palindrome?: ' + palindrome("madam")); //Output: true
console.log('"kayak" is palindrome?: ' + palindrome("kayak")); //Output: true
console.log('"hello" is palindrome?: ' + palindrome("hello")); //Output: false
