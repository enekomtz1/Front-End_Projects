/*  Directions:
- We're given a number n.
- The program has to console log the numbers from 1 to n.
- When a multiple of 3 is detected, it has to print 'Fizz'.
- When a multiple of 5 is detected, it has to print 'Buzz'.
- When a multiple of 3 and 5 is detected, it has to print 'FizzBuzz'.
*/

/*  Examples:
- fizzBuzz(5)   =>  1, 2, Fizz, 4, Buzz
*/

function fizzBuzz(n) {
  console.log("FizzBuzz of " + n + ": \n");

  for (let i = 1; i <= n; i++) {
    // Check if 'n' is multiple of 3 and 5:
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }

    // Check if 'n' is multiple of 5:
    else if (i % 3 === 0) {
      console.log("Fizz");
    }

    // Check if 'n' is multiple of 5:
    else if (i % 5 === 0) {
      console.log("Buzz");
    }

    // If it's not any of the above, return 'n':
    else {
      console.log(i);
    }
  }
}

fizzBuzz(5);
