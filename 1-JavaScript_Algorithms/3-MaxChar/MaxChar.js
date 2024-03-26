/*  Directions:
- Given a String, return its most used character.
*/

/*  Examples
- maxChar('abcccccccd') === 'c'
- maxChar('apple 1231111') === '1'
*/

function maxChar(str) {
  const charMap = {};
  let valueCount = 0;
  let maxChar = "";

  // Create a map with the value and number of appearances.
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let key in charMap) {
    if (charMap[key] > valueCount) {
      valueCount = charMap[key];
      maxChar = key;
    }
  }

  return maxChar + ": " + valueCount;
}

console.log(maxChar("abcccccccd")); //Output: 'c: 7'
console.log(maxChar("apple 1231111")); //Output: '1: 5'