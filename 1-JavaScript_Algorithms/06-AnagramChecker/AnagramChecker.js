/*  Directions:
- We're given 2 Strings.
- The goal is to check if they are anagrams of each other.
- One string is an anagram of another if it uses the same characters in the same quantity.
- Spaces or punctuation are not included.
- Capital letters and lower case are considered the same.
*/

/*  Examples:
- anagrams('RAIL! SAFETY!', 'fairy tales')  =>  True
- anagrams('Hi therre', 'Bye there')        =>  False
*/

// Sort the string:
function sortStr(str) {
  const result = str
    .toLowerCase()
    .replace(/[\W]/g, "")
    .split("")
    .sort()
    .join("");
  return result;
}

// Compare the 2 sorted strings:
function anagrams(str1, str2) {
  const anagramChecker = sortStr(str1) === sortStr(str2);
  const result =
    "Are '" + str1 + "' and '" + str2 + "' anagrams?: " + anagramChecker;
  return result;
}

console.log(anagrams("RAIL! SAFETY!", "fairy tales")); // Output: True
console.log(anagrams("Hi therre", "Bye there")); // Output: False
