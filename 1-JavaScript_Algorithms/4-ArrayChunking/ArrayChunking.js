/*  Directions:
- We're given an array and length size.
- The goal is to divide the array into subarrays with the lenght size given before.
*/

/*  Examples:
- chunk([1, 2, 3, 4], 2)    =>  [[1, 2], [3, 4]]
- chunk([1, 2, 3, 4, 5], 2) =>  [[1, 2], [3, 4], [5]]
- chunk([1, 2, 3, 4, 5], 4) =>  [[1, 2, 3, 4], [5]]
*/

function chunk(array, size) {
  const result = [];
  let index = 0;

  while (index < array.length) {
    result.push(array.slice(index, index + size));
    index += size;
  }

  return result;
}

console.log(chunk([1, 2, 3, 4], 2)); // Output: [ [ 1, 2 ], [ 3, 4 ] ]
console.log(chunk([1, 2, 3, 4, 5], 2)); // Output: [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
console.log(chunk([1, 2, 3, 4, 5], 4)); // Output: [ [ 1, 2, 3, 4 ], [ 5 ] ]
