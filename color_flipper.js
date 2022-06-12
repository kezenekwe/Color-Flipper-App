const clrDisplay = document.getElementById("clr-display");
const btn = document.getElementById('btn');

function rndmNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function rndmColor() {
    const x = rndmNum(0, 255);
    const y = rndmNum(0, 255);
    const z = rndmNum(0, 255);
    let Display = `rgb(${x}, ${y}, ${z})`
    clrDisplay.textContent = Display;
    //clrDisplay.style.color = Display;
    return Display;
}

function mouseover() {
    return btn.style.backgroundColor = 'black';
    //make button transparent.
    //add a class with style transparent?
    //change color to background color?
    //a:link?
}

function mouseout() {
    return btn.style.backgroundColor = 'transparent';
}

//maybe add button that makes color display the same as background color. Toggle?


