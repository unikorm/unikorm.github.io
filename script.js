"use strict";

let button = document.getElementById("myButton");
let isMoved = false;

function getRandomNumber(min, max) {
    return Math.floor( Math.random() * (max - min)) + min;
};

function moveButton() {
    let randomX, randomY
    if (isMoved) {
        do {              
        randomX = getRandomNumber(40, window.innerHeight);
        randomY = getRandomNumber(40, window.innerWidth);
        }
        while (randomX + button.offsetHeight > window.innerHeight || randomY + button.offsetWidth > window.innerWidth)
        button.style.top = randomX + "px";
        button.style.left = randomY + "px";
        isMoved = false;
        // console.log(randomX, randomY, window.innerHeight, window.innerWidth); 
    } else {
        do {
        randomX = getRandomNumber(40, window.innerHeight);
        randomY = getRandomNumber(40, window.innerWidth);
        }
        while (randomX + button.offsetHeight > window.innerHeight || randomY + button.offsetWidth > window.innerWidth)
        button.style.top = randomX + "px";
        button.style.left = randomY + "px";
        isMoved = true;
        // console.log(randomX, randomY, window.innerHeight, window.innerWidth);
    };
};