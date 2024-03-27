# Vowel Counter

## Introduction

The Vowel Counter project consists of a JavaScript utility that calculates the number of vowels within a given string. This utility can be useful for linguistic analysis, educational tools, or any application where vowel counting is necessary. The project showcases two different methods to achieve this: using regular expressions and iterating through each character.

## Table of Contents
- [Screenshot](#screenshot)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Examples](#examples)
- [Contributors](#contributors)
- [License](#license)
- [Links](#Links)

## Screenshot
![VowelCounterScreenshot](https://i.imgur.com/cfY5EWH.png)

## Installation

No installation is necessary for this project as it can be run directly in any JavaScript environment like a browser console or Node.js.

## Usage

To use the Vowel Counter, simply call either `numVowels_1(string)` or `numVowels_2(string)` with the string you want to analyze as the argument.

## Features

- **Method 1: Using `match()` Function**
  - Utilizes regular expressions to find all vowels in the string.
  - Counts vowels regardless of their case (uppercase or lowercase).
- **Method 2: Iterating through Characters**
  - Checks each character in the string against a predefined array of vowels.
  - Counts vowels in a case-insensitive manner.

## Examples

```javascript
console.log(numVowels_1("Hi There!")); // Outputs: 'Hi There!' has 3 vowels.
console.log(numVowels_1("How are you?")); // Outputs: 'How are you?' has 5 vowels.
console.log(numVowels_1("Why?")); // Outputs: 'Why?' has 0 vowels.

console.log(numVowels_2("Hi There!")); // Outputs: 'Hi There!' has 3 vowels.
console.log(numVowels_2("How are you?")); // Outputs: 'How are you?' has 5 vowels.
console.log(numVowels_2("Why?")); // Outputs: 'Why?' has 0 vowels.
```

## Contributors

This project is currently maintained by a single developer. New contributors are welcome to propose changes or enhancements by submitting pull requests or issues on the project's repository.

## License

This project is open-sourced under the [MIT License](https://opensource.org/licenses/MIT).

## Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/enekomtz1)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/enekomtz)