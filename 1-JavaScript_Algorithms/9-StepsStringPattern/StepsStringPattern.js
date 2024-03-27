/*  Directions:
- We're given a number n.
- The program has to console log a step shape with 'n' levels using the '#' character.
- The step has to have spaces on the right hand side.
*/

/*  Examples:
- steps(2)
    '# '
    '##'

- steps(3)
    '#  '
    '## '
    '###'

- steps(4)
    '#   '
    '##  '
    '### '
    '####'
*/

function steps(n) {
  console.log("Step String Pattern of " + n);
  // Working with rows:
  for (let row = 1; row < n + 1; row++) {
    let line = "";
    for (let column = 1; column < n + 1; column++) {
      if (column <= row) {
        line += "#";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

steps(2);
steps(3);
steps(4);
