# Random Hex Color Generator

The project is a web-based Random Hex Color Generator. It features a simple and user-friendly interface with a single button labeled "Change Color". When clicked, the button triggers a function that generates a random hexadecimal color value. This value is then displayed as text on the screen and applied as the background color of the webpage. The layout is centered and utilizes CSS Flexbox for alignment, with aesthetic transitions providing visual feedback during interaction. The project demonstrates fundamental web development concepts, including HTML structure, CSS styling, and dynamic content manipulation with JavaScript.

## Demo

Click [here](https://65f95346bd20d29450de3200--majestic-basbousa-aeddb6.netlify.app/) to display the Random Hex Color Generator!

## Screenshot

![RandomHexGeneratorScreenshot](https://i.imgur.com/Gs5EJsF.png)

## Color Reference

| Color                 | Hex                                                              |
| --------------------- | ---------------------------------------------------------------- |
| Page Background, Font | ![#051923](https://via.placeholder.com/10/051923?text=+) #051923 |
| Container             | ![#006494](https://via.placeholder.com/10/006494?text=+) #006494 |
| Timer Display         | ![#00a6fb](https://via.placeholder.com/10/00a6fb?text=+) #00a6fb |
| Buttons               | ![#0582ca](https://via.placeholder.com/10/0582ca?text=+) #0582ca |
| Shadow                | ![#003554](https://via.placeholder.com/10/003554?text=+) #003554 |

## HTML Code Explanation

The HTML file for the Random Hex Generator is structured as follows:

### Document Type Declaration

```html
<!DOCTYPE html>
```

This line declares the document type and version of HTML (HTML5 in this case), which helps the browser render the page correctly.

### HTML Element

```html
<html lang="en"></html>
```

The root element of the HTML document, with a `lang` attribute indicating that the content is in English.

### Head Section

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <link rel="icon" type="image/png" href="Images\HexIcon.png" />
  <title>Random Hex Generator</title>
</head>
```

- `<meta charset="UTF-8" />`: Sets the character encoding to UTF-8, which includes most characters from all known languages.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`: Ensures the page is responsive and scales correctly on different devices.
- `<link rel="stylesheet" href="style.css" />`: Links the external CSS file `style.css` for styling the webpage.
- `<link rel="icon" type="image/png" href="Images\HexIcon.png" />`: Defines a favicon for the webpage, displayed in the browser tab.
- `<title>Random Hex Generator</title>`: Sets the title of the webpage, shown in the browser tab.

### Body Section

```html
<body class="center-flex">
  <div id="container" class="center-flex">
    <p id="color">#2B807B</p>
    <button id="btn-color">Change Color</button>
  </div>

  <script src="script.js"></script>
</body>
```

- `<body class="center-flex">`: Contains the content of the webpage. The `center-flex` class likely applies CSS flexbox for centering content.
- `<div id="container" class="center-flex">`: A container `div` that wraps the color display and button, also using `center-flex` for styling.
  - `<p id="color">#2B807B</p>`: A paragraph element displaying the current hex color value.
  - `<button id="btn-color">Change Color</button>`: A button that, when clicked, likely triggers a function to change the color displayed in the `<p>` element.
- `<script src="script.js"></script>`: Links the external JavaScript file `script.js`, which contains the logic for changing the hex color on button click.

This HTML structure provides a simple, user-friendly interface for the Random Hex Generator, with a focus on functionality and minimalistic design.

## CSS Code Explanation

### General Style

```css
* {
  margin: 0;
  padding: 0;
  font-family: Verdana, sans-serif;
}

body {
  height: 100vh;
  background-color: #2b807b;
  text-align: center;
}

.center-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

- `*`: Applies a global reset to margin and padding, ensuring no default spacing from the browser. Sets the default font family to Verdana for the entire document.
- `body`: Sets the height to 100% of the viewport height (`100vh`), making the body take full height of the screen. The background color is set to a teal-like color (`#2B807B`), and text is centered horizontally.
- `.center-flex`: A utility class to apply flexbox centering. Content within elements with this class will be centered both horizontally and vertically.

### Container

```css
#container {
  height: 220px;
  width: 450px;
  background-color: white;
  border: 5px solid black;
  flex-wrap: wrap;
  flex-direction: column;
}
```

`#container` defines the main container's dimensions, style, and layout behavior. It has a fixed height and width, a white background, and a thick black border. Flexbox properties (`flex-wrap` and `flex-direction`) control the layout of child elements, allowing them to wrap and be oriented in a column.

### Text

```css
#color {
  font-size: 70px;
  font-weight: bold;
}
```

`#color` targets an element (likely displaying a color value or text) with a large font size and bold weight, making it prominent in the UI.

### Button

```css
button {
  font-size: 30px;
  color: white;
  border-radius: 20px;
  background-color: lightgrey;
  margin: 15px;
  padding: 10px 30px;
  user-select: none;
  cursor: pointer;
  transition-duration: 0.4s;
}

button:hover {
  background-color: lightskyblue;
}
```

- `button`: Styles buttons with a larger font size, white text, and rounded corners. The background is aqua, with matching border color. Margins and padding provide spacing and size, respectively. The `user-select: none` prevents text selection, `cursor: pointer` changes the mouse cursor on hover, and `transition-duration` smoothens the color change on hover.
- `button:hover`: Changes the button's background to blue when hovered, providing visual feedback to the user. The transition creates a smooth color change effect over 0.4 seconds.

## JavaScript Code Explanation

### DOM Elements Selection

```javascript
const btn = document.querySelector("button");
const color = document.getElementById("color");
```

- `btn` targets the button element, which, when clicked, triggers the color change.
- `color` refers to the DOM element where the hex color code will be displayed.

### Random Hex Color Generator Function

```javascript
function randomHexGenerator() {
  let digits = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * 16);
    color += digits[randomIndex];
  }

  return color;
}
```

- Generates a random hex color code.
- Loops six times to select six characters from the `digits` string, forming a valid hex color.

### Button Event Listener

```javascript
btn.addEventListener("click", function () {
  let randomColor = randomHexGenerator();

  // Update text:
  color.textContent = randomColor;

  // Update background color:
  document.body.style.backgroundColor = randomColor;
});
```

- Adds a click event listener to the button.
- Calls `randomHexGenerator` to get a new color.
- Updates the `textContent` of the `color` element with the hex code.
- Changes the `backgroundColor` of the document's body to the new color.

## Lessons Learned

Developing the provided code snippet, which implements a Random Hex Color Generator, offers several valuable lessons in web development, design, and JavaScript programming:

###### 1. **Simplicity in UI Design**: The minimalist design with a single button and display element shows that user interfaces can be straightforward yet effective, focusing on the core functionality without unnecessary elements.

###### 2. **CSS Flexbox for Centering**: Using `display: flex` along with `justify-content` and `align-items` set to `center` in the CSS demonstrates a powerful and responsive method for centering content within the viewport, applicable to various layouts.

###### 3. **Dynamic Styling with JavaScript**: The ability to change the webpage's background color dynamically with JavaScript upon a button click shows how to create interactive and responsive web pages. It illustrates how JavaScript can manipulate DOM elements and CSS properties in real-time.

###### 4. **Randomization in JavaScript**: The `randomHexGenerator` function teaches the method of generating random values, in this case, hex codes for colors. It highlights the use of loops, string concatenation, and the `Math.random()` function to create a hex color string.

###### 5. **Event Handling**: The use of `addEventListener` to bind a click event to a button demonstrates how to handle user inputs and events in JavaScript. It is a fundamental concept in interactive web design, showing how to trigger functions and actions based on user interactions.

###### 6. **CSS Transitions for User Feedback**: Implementing CSS transitions, as seen in the button hover effect, provides immediate visual feedback to the user, enhancing the user experience by making the interface feel more dynamic and responsive.

###### 7. **Consistent Styling**: The use of a consistent color scheme (background color and button hover state) and styling (fonts, button design) shows the importance of maintaining a cohesive visual theme across a web application.

###### 8. **Efficient DOM Manipulation**: Accessing and modifying DOM elements efficiently using `document.querySelector` and `getElementById` demonstrates effective DOM manipulation strategies, which are crucial for real-time web applications.

###### 9. **Code Organization and Readability**: The clear separation between HTML, CSS, and JavaScript files, along with well-structured and commented code, underscores the importance of code organization for maintainability and readability.

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/enekomtz1)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/enekomtz)
