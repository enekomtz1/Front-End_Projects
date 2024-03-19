# Random Quote Generator

The Random Quote Generator is a web application that displays motivational quotes. Using HTML, CSS, and JavaScript, it allows users to view and refresh quotes at the click of a button, offering a simple, responsive, and interactive experience.

## Demo

Click [here](https://65f9ac2a797ce60fbb0605a5--resilient-custard-4b9990.netlify.app/) to display the Random Quote Generator!

## Screenshot

![RandomQuoteGenerator](https://i.imgur.com/nFM1Umd.png)

## Color Reference

| Color           | Hex                                                              |
| --------------- | ---------------------------------------------------------------- |
| Page Background | ![#d4a373](https://via.placeholder.com/10/d4a373?text=+) #d4a373 |
| Container       | ![#faedcd](https://via.placeholder.com/10/faedcd?text=+) #faedcd |
| Button Hover    | ![#fefae0](https://via.placeholder.com/10/fefae0?text=+) #fefae0 |

## HTML Code Explanation

The HTML code for the Random Quote Generator is the foundation of the web application. It defines the structure and layout of the generator, linking the necessary stylesheets and scripts to make it functional and visually appealing.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <link rel="icon" href="Images/BookstoreIcon.png" />

    <title>Random Quotes Generator</title>
  </head>
</html>
```

- `<!DOCTYPE html>`: Declares the document type and version of HTML (HTML5 here).
- `<html lang="es">`: The root element of the HTML document, with `lang="es"` indicating that the content is primarily in Spanish.
- `<head>`: Contains meta-information, links to stylesheets, and other resources:
  - `<meta charset="UTF-8" />`: Sets the character encoding to UTF-8.
  - `<meta http-equiv="X-UA-Compatible" content="IE=edge" />`: Ensures legacy browsers render content in the highest mode available.
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`: Makes the application responsive, scaling for different device widths.
  - `<link rel="stylesheet" href="styles.css" />`: Links the external CSS file for styling.
  - `<link rel="icon" href="Images/BookstoreIcon.png" />`: Sets the favicon for the tab in the browser.
  - `<title>`: Specifies the title of the webpage shown in the browser tab.

```html
<body>
    <div class="container centered-content">
        <h1 id="title" class="centered-content">Motivational Quotes</h1>
        <div class="sub-container centered-content">
            <p id="quote" class="centered-content"></p>
            <p id="author" class="centered-content"></p>
            <button type="button" id="change-quote-btn" class="btn btn-primary">
                Next Quote
            </button>
        </div>
    </div>

    <script src="quotes.js"></script>
    <script src="script.js"></script>
</body>
</html>
```

- `<body>`: Contains the visible content of the HTML document.
  - `<div class="container centered-content">`: A container that centers the content on the page.
  - `<h1 id="title" class="centered-content">`: The main heading displaying the purpose of the page.
  - `<div class="sub-container centered-content">`: A sub-container for the quote and the button.
    - `<p id="quote" class="centered-content">`: Paragraph element where the quote will be dynamically inserted.
    - `<p id="author" class="centered-content">`: Paragraph element for displaying the quote's author.
    - `<button type="button" id="change-quote-btn" class="btn btn-primary">`: Button to load the next quote.
  - `<script src="quotes.js"></script>`: Links to the JavaScript file containing the quotes.
  - `<script src="script.js"></script>`: Links to the JavaScript file containing the logic to change quotes.

This HTML template is structured to provide a clean and focused user interface for displaying motivational quotes. It utilizes external CSS for styling and JavaScript files to add dynamic content and interactivity to the webpage.

## CSS Code Explanation

The CSS for the Random Quote Generator defines the visual appearance of the webpage, including layout, colors, typography, and interactivity effects. Here’s a detailed explanation of each part:

### General Styles

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Times New Roman", Times, serif;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #d4a373;
}

.centered-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
```

- `*`: The universal selector targets all elements to set their margin and padding to `0`, ensuring a consistent starting point. `box-sizing: border-box` makes element dimensions (width and height) include padding and border, simplifying layout design.
- `font-family`: Sets a default font for the entire page.
- `body`: Uses Flexbox to center its content both vertically and horizontally, with `height: 100vh` making it fill the entire viewport height. The background color is set to a light brown (`#d4a373`).
- `.centered-content`: A reusable class for flexbox settings, centering content within elements.

### Container Styles

```css
.container {
  width: 80vw;
  max-width: 600px;
  min-height: 500px;
  padding: 20px;
  background-color: #faedcd;
  border: 5px solid black;
  border-radius: 30px;
}

.sub-container {
  width: 80%;
}
```

- `.container`: Defines the main content area's width, maximum width, and minimum height. It uses a light beige background (`#faedcd`), a solid black border, and rounded corners.
- `.sub-container`: A smaller container within `.container`, taking up 80% of its parent’s width, for grouping specific elements like the quote and button.

### Content Styles

```css
#title {
  font-weight: bold;
  text-align: center;
}

#quote {
  font-size: 32px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#author {
  font-size: 25px;
  padding: 20px;
}

#change-quote-btn {
  width: 200px;
  height: 50px;
  font-size: 25px;
  border-radius: 30px;
  background-color: #faedcd;
}

#change-quote-btn:hover {
  background-color: #fefae0;
}
```

- `#title`, `#quote`, `#author`: These IDs target specific text elements. They control font size, weight, and alignment, with flexbox properties ensuring proper centering within their containers.
- `#change-quote-btn`: Styles the button with specific dimensions, font size, rounded corners, and background color matching the container’s background.
- `#change-quote-btn:hover`: Changes the button's background color on hover to a lighter shade (`#fefae0`), enhancing user interaction feedback.

This CSS file creates a harmonious and user-friendly design, with emphasis on readability and ease of navigation, which enhances the overall experience of the Random Quote Generator.

## JavaScript Code Explanation

The JavaScript for the Random Quote Generator adds interactivity to the webpage, allowing users to see new quotes with the click of a button. Here’s a breakdown of the script:

### Select HTML Elements

```javascript
let btnElem = document.getElementById("change-quote-btn");
let quoteElem = document.getElementById("quote");
let authorElem = document.getElementById("author");
```

- Variables `btnElem`, `quoteElem`, and `authorElem` are created to reference specific HTML elements. This allows the script to interact with these elements, such as changing their content dynamically.

### Random Index Generation

```javascript
function generateRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // Includes min but not max
}
```

- `generateRandomInt(min, max)`: A function to generate a random integer between `min` (inclusive) and `max` (exclusive). It uses `Math.random()` along with `Math.floor()` and `Math.ceil()` to ensure the result is an integer within the specified range.

### Change Quote Function

```javascript
function changeQuote() {
  let randomIndex = generateRandomInt(0, quotes.length);
  quoteElem.textContent = `"${quotes[randomIndex].text}"`;
  authorElem.textContent = quotes[randomIndex].author;
}
```

- `changeQuote()`: This function generates a random index to select a quote from an array (presumed to be defined in `quotes.js`). It then updates the `textContent` of `quoteElem` and `authorElem` to display the selected quote and its author.

### Initial Quote Display

```javascript
let randomIndex = generateRandomInt(0, quotes.length);
changeQuote();
```

- Upon loading, the script immediately generates a random quote. This ensures that a quote is displayed as soon as the user accesses the generator.

### Event Listener for Button

```javascript
btnElem.addEventListener("click", changeQuote);
```

- Adds an event listener to `btnElem` (the button) that triggers `changeQuote()` function when the button is clicked. This allows the user to change the quote displayed by clicking the "Next Quote" button.

This JavaScript code effectively ties together the user interface and logic of the Random Quote Generator, providing a dynamic and interactive experience.

## Lessons Learned

1. **Separation of Concerns**: This project illustrates the importance of separating structure (HTML), presentation (CSS), and behavior (JavaScript). Keeping these concerns separate makes the code easier to manage, debug, and scale.

2. **Responsive Design**: The use of percentages for widths (`width: 80vw;` in CSS) and viewport height (`height: 100vh;` for the body) demonstrates responsive design principles, ensuring the application looks good on different screen sizes and devices.

3. **Flexbox for Layout**: The use of Flexbox (`display: flex;`) in CSS for aligning and centering content shows how modern CSS layout modules can greatly simplify design and layout tasks, making the application more adaptable and visually consistent.

4. **Dynamic Content Manipulation with JavaScript**: The JavaScript code demonstrates how to dynamically change the content of a webpage without reloading it. By interacting with the DOM, the script changes the text content of elements, showcasing a fundamental concept in web development.

5. **Event Handling**: Adding an event listener to the button (`btnElem.addEventListener('click', changeQuote);`) teaches the crucial concept of event handling in JavaScript. This interaction is key to creating interactive and dynamic web pages that respond to user actions.

These lessons form the backbone of modern web development and are essential for building interactive, user-friendly, and responsive web applications.

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/enekomtz1)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/enekomtz)
