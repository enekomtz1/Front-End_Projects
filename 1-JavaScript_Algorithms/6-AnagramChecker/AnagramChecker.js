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
  return sortStr(str1) === sortStr(str2);
}

console.log(anagrams("RAIL! SAFETY!", "fairy tales")); //
console.log(anagrams("Hi therre", "Bye there"));
