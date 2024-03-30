
# Calculator

This project is a simple web-based calculator built using React Vite. It allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division.
## Screenshot

![CalculatorScreenshot](https://i.imgur.com/1OLwNde.png)
## Calculator.jsx Code Explanation

### Importing Dependencies
```javascript
import { useState } from "react";
import "./Calculator.css";
```
- `useState` is imported from the React library to manage the state in the calculator component.
- `./Calculator.css` is imported for styling the calculator's UI.

### Component Definition
```javascript
function Calculator() { ... }
```
- Defines a functional component named `Calculator`.

### State Management
```javascript
const [input, setInput] = useState("");
const [result, setResult] = useState("");
const [calcShown, setCalcShown] = useState(false);
```
Three pieces of state are maintained using the `useState` hook:
  - `input`: Holds the current operation or number input by the user.
  - `result`: Stores the calculation result.
  - `calcShown`: A boolean indicating whether the result of the calculation has been displayed.

### Event Handlers
#### `handleClick`
```javascript
const handleClick = (value) => { ... };
```
- This function is triggered when a button on the calculator is pressed.
- If a calculation result is currently displayed (`calcShown` is `true`), it resets the `input` and `result`, and allows starting a new calculation.
- Otherwise, it appends the clicked value to the `input`.

#### `calculate`
```javascript
const calculate = () => { ... };
```
- Executes when the "=" button is clicked.
- It attempts to evaluate the `input` string as a mathematical expression using `eval`.
- The result is displayed, rounding to four decimal places if necessary.
- In case of an error during evaluation (e.g., invalid input), it displays "Error".

### Rendering the UI
```javascript
return (
  <div className="calculator">...</div>
);
```
- The `return` statement of the `Calculator` function contains JSX, which describes the calculator's UI structure.
- It includes a display area for `input` and `result`, and buttons for digits, operations, clear (`C`), and equals (`=`).

### Button Components
```javascript
<button onClick={() => handleClick("7")}>7</button>
```
- Buttons in the UI use the `handleClick` function to update the `input` state with their respective values.

### Clear and Equals Buttons
```javascript
<button onClick={() => { setInput(""); setResult(""); }}>C</button>
<button className="equal" onClick={calculate}>=</button>
```
- The clear button (`C`) resets both `input` and `result` states.
- The equals button (`=`) triggers the `calculate` function to compute and display the result.

This code provides a basic yet functional calculator that can perform standard arithmetic operations.
## Lessons Learned

1. **State Management**: Properly managing state (like `input`, `result`, and `calcShown`) is crucial for dynamic behavior in React applications.
2. **Event Handling**: Implementing event handlers (`handleClick` and `calculate`) effectively controls user interactions and the app's logic flow.
3. **UI Responsiveness**: Keeping the user interface responsive and interactive is key, as seen with immediate feedback from button clicks.
4. **Error Handling**: Graceful error handling (in the `calculate` function) prevents the app from crashing and improves user experience.
5. **Modular Design**: While this is a simple app, organizing code into functions and components (like `Calculator`) can facilitate scalability and maintenance.
## Deployment
1. Clone the repository.
2. Install dependencies with
```bash 
npm install
```

3. Start the development server with
```bash 
npm run dev
```
## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/enekomtz1)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/enekomtz)
