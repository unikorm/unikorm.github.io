"use strict";

//here will be imported code
import { binary } from "./src/convertor.js"









// fun button on main page
let button = document.getElementById("myButton");
let isMoved = false;

const getRandomNumber = (min, max) => {
    return Math.floor( Math.random() * (max - min)) + min;
};

export const moveButton = () => {          // height of buttom 60px, so bottom 125px i want untouched
    let randomX, randomY
    if (isMoved) {
        do {              
        randomX = getRandomNumber(50, window.innerHeight - 155);
        randomY = getRandomNumber(50, window.innerWidth);
        }
        while (randomX + button.offsetHeight > window.innerHeight || randomY + button.offsetWidth > window.innerWidth)
        button.style.top = randomX + "px";
        button.style.left = randomY + "px";
        isMoved = false;
        // console.log(randomX, randomY, window.innerHeight, window.innerWidth); 
    } else {
        do {
        randomX = getRandomNumber(50, window.innerHeight - 155);
        randomY = getRandomNumber(50, window.innerWidth);
        }
        while (randomX + button.offsetHeight > window.innerHeight || randomY + button.offsetWidth > window.innerWidth)
        button.style.top = randomX + "px";
        button.style.left = randomY + "px";
        isMoved = true;
        // console.log(randomX, randomY, window.innerHeight, window.innerWidth);
    };
};





// handling button on the bottom

export const makeConvert = () => {
    return binary();
};