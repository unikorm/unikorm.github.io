
"use strict";

//  global functions, stuff....
const isNumber = (string) => {
    return !isNaN(string);  // this return true if it is not a number, so ! due to i need check if it is number
};



// decimal to binary and binary to decimal
// to binary
export const binary = (input) => {
    if (isNumber(input)) {
        console.log(input);
        let startValue = parseFloat(input);  // this put it with fractional part too
        console.log(startValue);
        return startValue.toString(2);  //put the entire number into binary format
    } else {
        return "write NUMBER!!";
    };
};


// to decimal
export const decimal = (input) => {
    let result = input.trim();
    if (/^[01]+$/.test(result)) {  // this check if in the string are only 0 and 1
        return (parseInt(result, 2)).toFixed(2);  // second parameter is radix, it put string in dvajkova sustava, default is 10 (desiatkova standardna sustava)
    } else {
        return "invalid BINARY string";
    };
} ;








//  celsius to kelvin and fahrenheit
// to kelvin
export const kelvin = (input) => {
    if (isNumber(input)) {
        let celsius = parseInt(input);
        return (celsius + 273.15).toFixed(2) + " K";  // fixed to two number after comma
    } else {
        return "write NUMBER!!"
    };
};

// to fahrenheit
export const fahrenheit = (input) => {
    if (isNumber(input)) {
        let celsius = parseInt(input);
        return (celsius * (9/5) + 32).toFixed(2) + " F";
    } else {
        return "write NUMBER!!"
    };
};







// decimal to roman number and opposite, i find it on web, a lot of variant on it, i find one blog about it so i read it and then i do it
// to roman
export const romanize = (input) => {

};

// to deromize
export const deromanize = (input) => {

};










// color hex to rgb and opposite, interesting too
// hex to rgb
export const hexToRgb = (hex) => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);  // regex to find #, then first pair of color, then other two, it return object if all good

    if (result !== null) {
        let r = parseInt(result[1], 16);
        let g = parseInt(result[2], 16);
        let b = parseInt(result[3], 16);
        return `${r}, ${g}, ${b}`;
    } else {
        return "wrong format"
    }

};

//rgb to hex
const componentToHex = (c) => {   // here we put Int to string in sestnastkovej sustave (hexagonal)
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;   // it must have two Int in on one value
};

export const rgbToHex = (input) => {   // here we split the string after commas and then put in Int
    let decomposition = input.split(",");
    return "#" + componentToHex(parseInt(decomposition[0])) + componentToHex(parseInt(decomposition[1])) + componentToHex(parseInt(decomposition[2]));
};












// text to morse code and vice versa, the last one i think for now, output will be dots and dashes
// function to pair character to morse code and vice versa
const charToMorse = (char) => {
    switch (char){
        case "A": return ".-";
        case 'B': return '-...';
        case 'C': return '-.-.';
        case 'D': return '-..';
        case 'E': return '.';
        case 'F': return '..-.';
        case 'G': return '--.';
        case 'H': return '....';
        case 'I': return '..';
        case 'J': return '.---';
        case 'K': return '-.-';
        case 'L': return '.-..';
        case 'M': return '--';
        case 'N': return '-.';
        case 'O': return '---';
        case 'P': return '.--.';
        case 'Q': return '--.-';
        case 'R': return '.-.';
        case 'S': return '...';
        case 'T': return '-';
        case 'U': return '..-';
        case 'V': return '...-';
        case 'W': return '.--';
        case 'X': return '-..-';
        case 'Y': return '-.--';
        case 'Z': return '--..';
        case ' ': return '/';
        case "1" : return '.----';
        case "2" : return '..---';
        case "3" : return '...--';
        case "4" : return '....-';
        case "5" : return '.....';
        case "6" : return '-....';
        case "7" : return '--...';
        case "8" : return '---..';
        case "9" : return '----.';
        case "0" : return '-----';
        case "!": return "-.-.--";
        case "?": return "..--..";
        case ".": return ".-.-.-";
        case ",": return "--..--";
        default: return '';
    };
};

const morseToChar = (morse) => {
    switch (morse) {
        case '.-': return 'A';
        case '-...': return 'B';
        case '-.-.': return 'C';
        case '-..': return 'D';
        case '.': return 'E';
        case '..-.': return 'F';
        case '--.': return 'G';
        case '....': return 'H';
        case '..': return 'I';
        case '.---': return 'J';
        case '-.-': return 'K';
        case '.-..': return 'L';
        case '--': return 'M';
        case '-.': return 'N';
        case '---': return 'O';
        case '.--.': return 'P';
        case '--.-': return 'Q';
        case '.-.': return 'R';
        case '...': return 'S';
        case '-': return 'T';
        case '..-': return 'U';
        case '...-': return 'V';
        case '.--': return 'W';
        case '-..-': return 'X';
        case '-.--': return 'Y';
        case '--..': return 'Z';
        case '/': return ' ';
        case "-----": return "0";
        case ".----": return "1";
        case "..---": return "2";
        case "...--": return "3";
        case "....-": return "4";
        case ".....": return "5";
        case "-....": return "6";
        case "--...": return "7";
        case "---..": return "8";
        case "----.": return "9";
        case "-.-.--": return "!";
        case "..--..": return "?";
        case ".-.-.-": return ".";
        case "--..--": return ",";
        default: return '';
    };
};

// text to morse code
export const toMorse = (input) => {

    if (/^[ .-]*$/.test(input)) {   // i know i can do better with this to check if it contain any morse code character, but for now only this return when in input will be only morse code characters
        return "write text, not morse code here";
    };
    let modifiedInput = input.toUpperCase().trim();  // to upper every letter and delete whitespace on start and the end
    let morseCode = modifiedInput.split("").map(charToMorse).join(" ");  //  first split on every character, then map with chartToMorse and then join with whitespace after every letter
    return morseCode;
};

// morse code to text
export const toText = (input) => {

    if (!/^[ /.-]*$/.test(input)) {   // it check if only morse code characters are in input
        return "here must be only morse code"
    };

    let textResult = input.trim().split(" ").map(morseToChar);   // put away white spaces at the start and end, split on each character and map over them
    return textResult.join("");  // join together from array to string
};
