// Select HTML elements
let btnElem = document.getElementById('change-quote-btn');
let quoteElem = document.getElementById('quote');
let authorElem = document.getElementById('author');

// Random index generation
function generateRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // Includes min but not max
  return Math.floor(Math.random() * (max - min) + min);
}

// Select a random quote from "quotes.js"
function changeQuote() {
  let randomIndex = generateRandomInt(0, quotes.length);
  quoteElem.textContent = `"${quotes[randomIndex].text}"`;
  authorElem.textContent = quotes[randomIndex].author;
}

// Select a random quote when the app runs for the first time
let randomIndex = generateRandomInt(0, quotes.length);
changeQuote();

// Change quote when clicking the button
btnElem.addEventListener('click', changeQuote);