/*  Directions:
- We're given a String.
- The goal is to capitalize the first letter of each word.
*/

/*  Examples:
- capitalize('hello, this is Eneko')    => 'Hello, This Is Eneko'
- capitalize('what is titlecase?')      => 'What Is Titlecase?'
- capitalize("hello github, i hope you're having as much fun as me!")   =>  'Hello Github, I Hope You're Having As Much Fun As Me!'
*/

function capitalize(str) {
  const words = str.split(" ");
  const result = words
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
  return result;
}

console.log(capitalize("hello, this is Eneko"));
console.log(capitalize("what is titlecase?"));
console.log(
  capitalize("hello github, i hope you're having as much fun as me!")
);
