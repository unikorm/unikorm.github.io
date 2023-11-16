
"use strict";

//  global functions, stuff....
const isNumber = (string) => {
    return !isNaN(string);  // this return true if it is not a number, so ! due to i need check if it is number
};



// decimal to binary and binary to decimal
// to binary
export const binary = (input) => {
    if (isNumber(input)) {
        let startValue = parseInt(input);
        return (startValue >>> 0).toString(2);  //put the number into binary format, >>> is some crazy JS, google it...
    } else {
        return "write NUMBER!!"
    };
};


// to decimal
export const decimal = (input) => {
    if (/^[01]+$/.test(input)) {  // this check if in the string are only 0 and 1
        return (parseInt(input, 2)).toFixed(2);  // second parameter is radix, it put string in dvajkova sustava, default is 10 (desiatkova standardna sustava)
    } else {
        return "invalid BINARY string";
    };
} ;








//  celsius to kelvin and fahrenheit
// to kelvin
export const kelvin = (input) => {
    if (isNumber(input)) {
        let celsius = parseInt(input);
        return (celsius + 273.15).toFixed(2);  // fixed to two number after comma
    } else {
        return "write NUMBER!!"
    };
};

// to fahrenheit
export const fahrenheit = (input) => {
    if (isNumber(input)) {
        let celsius = parseInt(input);
        return (celsius * (9/5) + 32).toFixed(2);
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
// function to pair character to morse code
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

// text to morse code
export const toMorse = (input) => {
    let modifiedInput = input.toUpperCase().trim();
    let morseCode = modifiedInput.split("").map(charToMorse).join(" ");
    return morseCode;
};
