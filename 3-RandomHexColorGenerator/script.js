// Select DOM elements:
const btn = document.querySelector('button');
const color = document.getElementById('color');

function randomHexGenerator(){
    let digits = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++){
        let randomIndex = Math.floor(Math.random() * 16);
        color += digits[randomIndex]
    }
    
    return color;
}

btn.addEventListener('click', function(){
    let randomColor = randomHexGenerator();

    // Update text:
    color.textContent = randomColor;

    // Update background color:
    document.body.style.backgroundColor = randomColor;
})