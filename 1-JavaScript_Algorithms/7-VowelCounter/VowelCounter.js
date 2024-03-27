/*  Directions:
- We're given 1 String.
- The goal is to return the number of vowels contained in the String.
- 'a', 'e', 'i', 'o', 'u'.
*/

/*  Examples:
- numVowels('Hi There!')        =>  3
- numVowels('How are you?')     =>  5
- numVowels('Why?')             =>  0
*/

// 1st method: Using match() function
function numVowels_1(str) {
  // Vowel match:
  const matches = str.toLowerCase().match(/[aeiou]/gi);

  // Count the nomber of vowels:
  const numVowels = matches ? matches.length : 0;

  const result = "'" + str + "' has " + numVowels + " vowels.";
  return result;
}

console.log("1st method: Using match() function\n");
console.log(numVowels_1("Hi There!"));
console.log(numVowels_1("How are you?"));
console.log(numVowels_1("Why?"));

console.log("\n----------------------------------------------:\n");

/* ---------------------------------------------- */

// 2nd method: Creating an array with all the vowels in it
function numVowels_2(str) {
  const vowelArray = ["a", "e", "i", "o", "u"];
  let numVowels = 0;
  str1 = str.toLowerCase();

  for (let char of str1) {
    if (vowelArray.includes(char)) {
      numVowels += 1;
    }
  }

  const result = "'" + str + "' has " + numVowels + " vowels.";
  return result;
}

console.log("2nd method: Creating an array with all the vowels in it\n");
console.log(numVowels_2("Hi There!"));
console.log(numVowels_2("How are you?"));
console.log(numVowels_2("Why?"));
