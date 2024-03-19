const inputRed = document.getElementById('red');
const inputGreen = document.getElementById('green');
const inputBlue = document.getElementById('blue');

const redText = document.getElementById('red-text');
const greenText = document.getElementById('green-text');
const blueText = document.getElementById('blue-text');

let red = inputRed.value;
let green = inputGreen.value;
let blue = inputBlue.value;

// Update parragraph text
redText.innerText = red;
greenText.innerText = green;
blueText.innerText = blue;

function updateColor(red, green, blue){
    const rgbColor = `rgb(${red}, ${green}, ${blue})`
    document.body.style.backgroundColor = rgbColor;
}

// Update red color
inputRed.addEventListener('change', (e) =>{
    red = e.target.value;
    redText.innerText = red;
    updateColor(red, green, blue);
})

// Update green color
inputGreen.addEventListener('change', (e) =>{
    green = e.target.value;
    greenText.innerText = green;
    updateColor(red, green, blue);
})

// Update blue color
inputBlue.addEventListener('change', (e) =>{
    blue = e.target.value;
    blueText.innerText = blue;
    updateColor(red, green, blue);
})