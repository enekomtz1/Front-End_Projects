/*  Directions:
- We're given a number n.
- The program has to console log a pyramid shape with 'n' levels using the '#' character.
- The pyramid has to have spaces on both sides.
*/

/*  Examples:
- steps(2)
    ' # '
    '###'

- steps(3)
    '  #  '
    ' ### '
    '#####'

- steps(4)
    '   #   '
    '  ###  '
    ' ##### '
    '#######'
*/

function pyramid(n) {
  console.log("Pyramid Pattern of " + n);

  // The number of columns is 2n-1:
  const mid = Math.floor((2 * n - 1) / 2);

  // Working with rows:
  for (let row = 0; row < n; row++) {
    let line = "";

    // Working with columns:
    for (let column = 0; column < 2 * n - 1; column++) {
      if (column >= mid - row && column <= mid + row) {
        line += "#";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

pyramid(2);
pyramid(3);
pyramid(4);
