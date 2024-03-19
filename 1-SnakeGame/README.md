# Snake Game

The Snake Game project is an interactive web-based game developed using JavaScript, HTML, and CSS. It allows players to control a snake, guiding it to collect items and grow in length while avoiding walls and its own tail. This game is designed for individuals looking for a fun and engaging way to pass time, improve their reaction speed, and enjoy a classic arcade experience online.

## Demo

Click [here](https://65f731f00df21dafc2ec2e80--soft-sprite-1150b7.netlify.app/) to play the Snake Game demo!

## Screenshot

![Descripción de la imagen](https://i.imgur.com/SQ4ozWd.png)
## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Start Button | ![#ff595e](https://via.placeholder.com/10/ff595e?text=+) #ff595e |
| Background Color | ![#1982c4](https://via.placeholder.com/10/1982c4?text=+) #1982c4 |
| Snake Color | ![#8ac926](https://via.placeholder.com/10/8ac926?text=+) #8ac926 |
| Food Color | ![#ffca3a](https://via.placeholder.com/10/ffca3a?text=+) #ffca3a |
| Border | ![#000](https://via.placeholder.com/10/000?text=+) #000 |

## HTML Code Explanation
The HTML file sets up the game's structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Snake</title>
    <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet">
    <link href="styles.css" rel="stylesheet">
    <script src="script.js" type="text/javascript" defer></script>
</head>
<body>
    <div id="board"></div>
    <div class="boardInfo">
        <div>
            Score: <div id="scoreBoard"></div>
        </div>
        <button id="start">Start</button>
    </div>
    <div id="gameOver">Game Over</div>
</body>
</html>
```

- The `board` div is the container for the game grid.
- `scoreBoard` displays the current score.
- The `start` button initiates the game.
- `gameOver` shows a game-over message when the game ends.

## CSS Code Explanation
The CSS defines the visual appearance of the game:

```css
* {
    font-family: 'Share Tech Mono', monospace;
}

#board, .boardInfo {
    max-width: 500px;
}

#board {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
}

#start, .boardInfo {
    font-size: 25px;
}

#gameOver {
    display: none;
}

.boardInfo {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

#start {
    background-color: #ff595e;
    border: none;
    color: white;
}

#scoreBoard {
    display: inline-flex;
}

.square {
    aspect-ratio: 1;
}

.emptySquare {
    background-color: #1982c4;
}

.snakeSquare {
    background-color: #8ac926;
    border: 1px solid #000;
}

.foodSquare {
    background-color: #ffca3a;
    border: 1px solid #000;
}
```

- Grid layout for the game board.
- Styling for the score, start button, and game over message.
- Different colors for the snake, food, and empty squares.

## JavaScript Code Explanation
The JavaScript file contains the game's functionality:

### Setup and Initialization
```javascript
const board = document.getElementById('board');
const scoreBoard = document.getElementById('scoreBoard');
const startButton = document.getElementById('start');
const gameOverSign = document.getElementById('gameOver');

const boardSize = 10;
const gameSpeed = 300; // milliseconds
const squareTypes = { emptySquare: 0, snakeSquare: 1, foodSquare: 2 };
const directions = { ArrowUp: -10, ArrowDown: 10, ArrowRight: 1, ArrowLeft: -1 };

let snake, score, direction, boardSquares, emptySquares, moveInterval;
```

- Elements are selected from the DOM.
- Game settings like board size and speed are defined.
- `squareTypes` and `directions` are used for game logic.

### Game Functions
- `drawSnake` and `drawSquare`: Handle the rendering of the snake and the grid squares.
- `moveSnake`: Calculates the snake's next position and updates the game state.
- `addFood` and `createRandomFood`: Manage the placement of food on the board.
- `gameOver` and `startGame`: Control the game's start and end processes.

### Event Listeners
```javascript
document.addEventListener('keydown', directionEvent);
startButton.addEventListener('click', startGame);
```

- Key presses change the snake's direction.
- The start button begins the game.

## Lessons Learned

While building the Snake Game project, I have learned about game design principles, such as creating a user-friendly interface and responsive controls. I have also deepened my understanding of programming concepts like loops, conditionals, and event handling in JavaScript, as well as the use of HTML and CSS for layout and styling.

Challenges have included implementing the snake's movement logic, handling collisions, and ensuring the game worked smoothly across different web browsers. To overcome these, I have utilized debugging tools, consulted online resources and forums for problem-solving, and refined the code to improve performance and user experience.

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/enekomtz1)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/enekomtz)
