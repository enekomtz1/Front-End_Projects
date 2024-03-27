# Anagram Checker

## Introduction

The Anagram Checker is a simple yet effective tool to determine if two strings are anagrams, disregarding spaces, punctuation, and capitalization. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. This functionality can be used in various applications such as word games, educational tools, and text analysis software.

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
![AnagramCheckerScreenshot](https://i.imgur.com/h3TWwwO.png)

## Installation

Since this script is written in JavaScript, it can be run in any environment that supports JavaScript execution, such as web browsers or Node.js.

1. Ensure you have Node.js installed on your computer. If you don't have Node.js, you can download and install it from [Node.js official website](https://nodejs.org/).
2. Download the script or clone the repository containing the script to your local machine.

## Usage

To use the Anagram Checker, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to the directory where the script is located.
3. Run the script using Node.js by typing `node <script-name.js>`, replacing `<script-name.js>` with the name of the script file.

## Features

- **Case Insensitive:** The comparison is case insensitive, meaning "A" will be considered the same as "a".
- **Ignores Non-Alphabetic Characters:** Only alphabetic characters are considered, all other characters (like spaces, punctuation) are ignored.
- **Sorted String Comparison:** The strings are sorted alphabetically before comparison to check for anagram status.

## Examples

Here are some examples of how the Anagram Checker can be used:

- Checking simple words:
  ```javascript
  console.log(anagrams('Listen', 'Silent')); // Output: True
  ```
- Checking phrases:
  ```javascript
  console.log(anagrams('RAIL! SAFETY!', 'fairy tales')); // Output: True
  ```

## Contributors

This project is currently maintained by a single developer. New contributors are welcome to propose changes or enhancements by submitting pull requests or issues on the project's repository.

## License

This project is open-sourced under the [MIT License](https://opensource.org/licenses/MIT).

## Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/enekomtz1)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/enekomtz)