const clrDisplay = document.getElementById("clr-display");
const btns = document.querySelectorAll(".btn");
const bdy = document.getElementById("bdy");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//random number generator for rgb funcion
function rndmNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//rgb function
function rndmColor() {
    const x = rndmNum(0, 255);
    const y = rndmNum(0, 255);
    const z = rndmNum(0, 255);
    let Display = `rgb(${x}, ${y}, ${z})`
    clrDisplay.textContent = Display;
    //traverse the dom for body tag, or use getelementbyid
    bdy.style.backgroundColor = Display;
    //clrDisplay.style.color = Display;
    return Display;
}

//hexadecimal function
function hexa() { 
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    clrDisplay.innerHTML = hexColor;
    document.body.style.backgroundColor = hexColor;
}

//for mouseover/mouseout first get classlist of button, 
//look for class that using contains method and look for the click event.
//use for each, use queryselectorall for buttons

/*
function mouseover() {
    //return btn.style.backgroundColor = 'black';
    btns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            const btnList = e.currentTarget.classList;
                if (btnList.contains("1")) {
                    rndmColor();
                } else if (btnList.contains("2")) {
                    hexa();
                }
        });
    });
}*/

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const btnList = e.currentTarget.classList;
            if (btnList.contains("1")) {
                rndmColor();
            } else if (btnList.contains("2")) {
                hexa();
            }
    });
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
} 


