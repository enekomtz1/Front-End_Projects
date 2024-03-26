
# Stopwatch

Stopwatch project developed using JavaScript, HTML, and CSS is a web-based application that functions as a timer. It allows users to start, stop, and reset the time, accurately measuring intervals in hours, minutes, seconds, and milliseconds. The JavaScript component manages the timer's functionality, handling the logic for time calculation and control flow. HTML structures the stopwatch's display, providing a user interface where the timer's readings are shown. CSS is used to style the interface, giving it an appealing and easy-to-use appearance. This project combines these technologies to create a practical tool for time management and tracking.
## Demo

Click [here](https://65f74911cac913bfe052f7e8--soft-sprite-1150b7.netlify.app/) to display the stopwatch!

## Screenshot

![StopwatchScreenshot](https://i.imgur.com/HGp4nDZ.png)
## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Page Background, Font | ![#051923](https://via.placeholder.com/10/051923?text=+) #051923 |
| Container | ![#006494](https://via.placeholder.com/10/006494?text=+) #006494 |
| Timer Display | ![#00a6fb](https://via.placeholder.com/10/00a6fb?text=+) #00a6fb |
| Buttons | ![#0582ca](https://via.placeholder.com/10/0582ca?text=+) #0582ca |
| Shadow | ![#003554](https://via.placeholder.com/10/003554?text=+) #003554 |

## HTML Code Explanation

This HTML code sets up the structure for a basic stopwatch web application. It includes the necessary elements to display and control the stopwatch. Here’s a detailed breakdown of each part:

### Document Type and Language

```html
<!DOCTYPE html>
<html lang="en">
```
- `<!DOCTYPE html>` declares the document type and version of HTML (HTML5 here).
- `<html lang="en">` starts the HTML document and specifies the language (English) for the document.

### Head Section

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stopwatch</title>
    <link rel="stylesheet" href="style.css">
</head>
```
- `<head>` contains metadata, links to stylesheets, and other resources.
- `<meta charset="UTF-8">` sets the character encoding to UTF-8, supporting a wide range of characters.
- `<meta http-equiv="X-UA-Compatible" content="IE=edge">` ensures that Internet Explorer uses the latest rendering engine.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` makes the site responsive by setting the viewport to match the device’s width and initial scale to 1.0.
- `<title>Stopwatch</title>` sets the title of the webpage, visible in the browser tab.
- `<link rel="stylesheet" href="style.css">` links to an external CSS file (`style.css`) for styling the webpage.

### Body Section

```html
<body>
    <div class="container">
        <div class="timer-display">
            00 : 00 : 00 : 000
        </div>
        <div class="buttons">
            <button id="start-timer">Start</button>
            <button id="pause-timer">Pause</button>
            <button id="reset-timer">Reset</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```
- `<body>` contains the content of the webpage.
- `<div class="container">` serves as a container for the stopwatch, providing a way to group elements and apply styles or layout.
- Inside the container, there is a `<div class="timer-display">`, which shows the time in a formatted string (`00 : 00 : 00 : 000`). This is where the stopwatch time is displayed.
- Another `<div>` contains the control buttons:
    - `<button id="start-timer">Start</button>` is the button to start the stopwatch.
    - `<button id="pause-timer">Pause</button>` is the button to pause the stopwatch.
    - `<button id="reset-timer">Reset</button>` is the button to reset the stopwatch to its initial state.
- `<script src="script.js"></script>` links to the JavaScript file (`script.js`) containing the logic for the stopwatch's functionality.

### Conclusion

This HTML structure provides the basic interface for a stopwatch application, with a display area for the time and buttons for controlling the stopwatch's actions. It is designed to work in tandem with the JavaScript code that provides the stopwatch functionality and the CSS file for styling the application's appearance.

## CSS Code Explanation

The CSS code provided styles the stopwatch application, defining the layout, colors, and interactivity. Here’s a breakdown of each section:

### Global Styles

```css
*,
*:before,
*:after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
```
Applies a global reset to padding and margin for all elements, ensuring consistent styling across browsers. `box-sizing: border-box` makes sure that padding and border are included in the total width and height of elements.

### Body Styling

```css
body {
    background: #051923;
}
```
Sets the background color of the webpage to a dark blue (`#051923`).

### Container Styling

```css
.container {
    background-color: #006494;
    width: 40%;
    min-width: 500px;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    padding: 20px 0;
    padding-bottom: 50px;
    border-radius: 10px;
    box-shadow: 0 0 20px #051923;
}
```
Styles the `.container` element, which wraps the stopwatch display and buttons. It centers the container on the page using absolute positioning and transform. The background color, minimum width, padding, border radius, and box shadow are also defined.

### Timer Display Styling

```css
.timer-display {
    background: #00a6fb;
    font-family: 'Roboto mono', monospace;
    color: #051923;
    font-size: 30px;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 5px;
    box-shadow: 0 0 20px #003554;
}
```
Applies styling to the `.timer-display` element where the stopwatch time is shown. It sets the background color, font family, color, size, and spacing. Flexbox is used to center and space the time digits evenly.

### Button Container Styling

```css
.buttons {
    width: 90%;
    margin: 60px auto 0 auto;
    display: flex;
    justify-content: space-around;
}
```
Styles the `.buttons` div that contains the control buttons, setting its width, margin, and distribution of child elements.

### Button Styling

```css
.buttons button {
    background-color: #0582ca;
    color: #051923;
    border: none;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
}
```
Applies styles to the buttons inside the `.buttons` container. Defines the background color, text color, font, size, border radius, and cursor type.

### Specific Button Styling

```css
#start-timer, #pause-timer {
    background-color: #0582ca;
}
```
Specifically styles the `start` and `pause` buttons, setting their background color.

### Button Hover Effect

```css
.buttons button:hover {
    box-shadow: 0 0 20px #003554;
}
```
Adds a hover effect to the buttons, creating a box shadow when the mouse pointer is over them.

### Conclusion

This CSS code provides a visually appealing and functional design for the stopwatch application. It employs modern styling techniques like flexbox for layout, box-shadow for depth, and hover effects for interactivity, creating a user-friendly interface.

## JavaScript Code Explanation

This stopwatch script is designed to offer basic functionalities such as start, pause, and reset actions using JavaScript. It interacts with the DOM to display the timer and listen for user inputs via buttons. Here's a breakdown of the code components and their functions:

### Variables Initialization
```javascript
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
```
The stopwatch's time is stored in four variables: `milliseconds`, `seconds`, `minutes`, and `hours`. These are initialized to zero.

```javascript
let timeRef = document.querySelector(".timer-display");
```
`timeRef` holds the reference to the DOM element with the class `timer-display`, where the time will be displayed.

```javascript
let int = null;
```
`int` is used to store the reference to the interval that updates the stopwatch. It's initially set to `null`.

### Event Listeners for Buttons
The code listens for click events on three buttons: start, pause, and reset. These buttons are identified by their IDs: `start-timer`, `pause-timer`, and `reset-timer`.

#### Start Button
```javascript
document.getElementById("start-timer").addEventListener("click", () => {
    if(int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});
```
When the start button is clicked, it first checks if the `int` variable is not null, indicating a running interval. If so, it clears the interval to prevent multiple intervals from running simultaneously. Then, it sets an interval that calls the `displayTimer` function every 10 milliseconds, effectively starting the stopwatch.

#### Pause Button
```javascript
document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(int);
});
```
The pause button's click event clears the interval, pausing the stopwatch. It does this by calling `clearInterval` on `int`, stopping the timer's update function.

#### Reset Button
```javascript
document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000 ";
});
```
Clicking the reset button clears the interval and resets the time variables to zero. It also updates the display to show the initial timer state, "00 : 00 : 00 : 000".

### The displayTimer Function
```javascript
function displayTimer() {
    milliseconds += 10;
    if(milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
            if(minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = 
        milliseconds < 10
        ? "00" + milliseconds
        : milliseconds < 100
        ? "0" + milliseconds
        : milliseconds;

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;

}
```
This function is responsible for updating the time variables and the display. It increments the milliseconds by 10 each call. When milliseconds reach 1000, it increments seconds by one and resets milliseconds to zero, and similarly for seconds to minutes, and minutes to hours.

The display format ensures two digits for hours, minutes, and seconds, and three digits for milliseconds, adding leading zeros when necessary.

### Conclusion
This script offers a straightforward implementation of a stopwatch using vanilla JavaScript. It demonstrates basic DOM manipulation, interval management, and event handling. It's designed to be easily integrated into any web project requiring stopwatch functionality.
## Lessons Learned

Creating a stopwatch using JavaScript, HTML, and CSS provides valuable lessons in front-end development, including:

1. **JavaScript Timers**: Understanding how to use `setInterval` and `clearInterval` methods to implement the time counting mechanism.
2. **DOM Manipulation**: Learning how to dynamically update the HTML document's content using JavaScript to show the stopwatch's current time.
3. **CSS Styling**: Gaining skills in designing the user interface, such as creating buttons and displaying time, to make the stopwatch visually appealing and user-friendly.
4. **Event Handling**: Learning how to handle user interactions, such as start, stop, and reset events, to control the stopwatch's behavior.
5. **Debugging and Testing**: Enhancing problem-solving skills by identifying and fixing bugs to ensure the stopwatch works accurately and reliably.
## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/enekomtz1)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/enekomtz)
