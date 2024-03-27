/*  Directions:
- We're given a number n.
- The program has to console log NxN spiral matrix
*/

/*  Examples:
- spiralMatrix(2)
    [[1, 2],
    [4, 3]]

- spiralMatrix(3)
    [[1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]]

- spiralMatrix(4)
    [[1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7]]
*/

function spiralMatrix(n) {
  console.log("Spiral Matrix of " + n + "X" + n);

  let counter = 1,
    startRow = 0,
    endRow = n - 1,
    startColumn = 0,
    endColumn = n - 1;

  // Creating the NxN matrix:
  const result = [];
  for (i = 0; i < n; i++) {
    result.push([]);
  }

  while (startRow <= endRow && startColumn <= endColumn) {
    // Generating the rows starting from the top (left to right):
    for (let i = startColumn; i <= endColumn; i++) {
      result[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // Generating the columns starting from the right (top to bottom):
    for (let i = startRow; i <= endRow; i++) {
      result[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // Generating the rows starting from the bottom (right to left):
    for (let i = endColumn; i >= startColumn; i--) {
      result[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // Generating the columns starting from the left (bottom to top):
    for (let i = endRow; i >= startRow; i--) {
      result[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  console.log(result);
  console.log('\n')
}

spiralMatrix(4);
spiralMatrix(5);
spiralMatrix(6);
