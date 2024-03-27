# Array Chunker

## Introduction
Array Chunker is a lightweight JavaScript utility for breaking down an array into smaller subarrays of a specified length. This is particularly useful for paging or grouping array items into fixed-size blocks.

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
![ArrayChunkingScreenshot](https://i.imgur.com/XzFpBd4.png)

## Installation
To use Array Chunker, simply include the JavaScript file in your project. No external dependencies are required.

```javascript
// Include Array Chunker in your HTML file
<script src="path/to/array-chunker.js"></script>
```

## Usage
The main functionality of Array Chunker is provided by the `chunk` function, which divides an array into smaller subarrays of a specified length.

```javascript
function chunk(array, size);
```

- `array`: The array to be divided.
- `size`: The desired length of subarrays.

## Features
- **Simple Integration:** Easily integrates with any JavaScript project.
- **No Dependencies:** Works standalone without the need for additional libraries.
- **Flexible:** Can handle arrays of any size and type.

## Examples
Here are a few examples of how `chunk` can be used:

1. Chunk an array of numbers:

    ```javascript
    console.log(chunk([1, 2, 3, 4], 2));
    // Output: [[1, 2], [3, 4]]
    ```

2. Handle arrays with lengths that are not multiples of the chunk size:

    ```javascript
    console.log(chunk([1, 2, 3, 4, 5], 2));
    // Output: [[1, 2], [3, 4], [5]]
    ```

3. Large chunk size relative to the array length:

    ```javascript
    console.log(chunk([1, 2, 3, 4, 5], 4));
    // Output: [[1, 2, 3, 4], [5]]
    ```

## Contributors
This project is currently maintained by a single developer. New contributors are welcome to propose changes or enhancements by submitting pull requests or issues on the project's repository.

## License
This project is open-sourced under the [MIT License](https://opensource.org/licenses/MIT).

## Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/enekomtz1)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/enekomtz)
