
"use strict";

//here will be imported code
import { binary, decimal, kelvin, fahrenheit } from "./src/convertor.js"










// fun button on main page
let button = document.getElementById("myButton");
let isMoved = false;

const getRandomNumber = (min, max) => {
    return Math.floor( Math.random() * (max - min)) + min;
};

export const moveButton = () => {          // height of buttom 60px, so bottom 155px i want untouched
    let randomX, randomY
    if (isMoved) {
        do {              
        randomX = getRandomNumber(55, window.innerHeight - 155);
        randomY = getRandomNumber(55, window.innerWidth);
        }
        while (randomX + button.offsetHeight > window.innerHeight || randomY + button.offsetWidth > window.innerWidth)
        button.style.top = randomX + "px";
        button.style.left = randomY + "px";
        isMoved = false;
        // console.log(randomX, randomY, window.innerHeight, window.innerWidth); 
    } else {
        do {
        randomX = getRandomNumber(55, window.innerHeight - 155);
        randomY = getRandomNumber(55, window.innerWidth);
        }
        while (randomX + button.offsetHeight > window.innerHeight || randomY + button.offsetWidth > window.innerWidth)
        button.style.top = randomX + "px";
        button.style.left = randomY + "px";
        isMoved = true;
        // console.log(randomX, randomY, window.innerHeight, window.innerWidth);
    };
};








// handling button on the bottom

// here wil be logic of shoving content of what button user clicks 
const convertorBtn = document.getElementById("btnConverter");
const convertorMenu = document.getElementById("convertorMenu");

convertorBtn.addEventListener("click", () => {
    convertorMenu.style.display = (convertorMenu.style.display === "none" || convertorMenu.style.display === "") ? "flex" : "none";  // toggle visibility
})










// convert between-function, she connect with logic of every convert function from separate files
export const makeConvert = (event) => {
    event.preventDefault();
    
    // values what need all convert method
    let inputValue = document.getElementById("inputValue").value;
    let convertingMethod = document.getElementById("convertingMethod").value;
    let outputValue = document.getElementById("outputValue");

    switch(convertingMethod) {
        case "binary":
            outputValue.innerHTML = binary(inputValue);
            break;
        case "decimal":
            outputValue.innerHTML = decimal(inputValue);
            break;
        case "kelvin":
            outputValue.innerHTML = kelvin(inputValue);
            break;
        case "fahrenheit":
            outputValue.innerHTML = fahrenheit(inputValue);
            break;
        default:
            outputValue.innerHTML = "somethig is wrong"
    }
};