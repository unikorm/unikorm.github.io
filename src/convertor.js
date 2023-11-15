
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
        return (celsius + 273.15).toFixed(2);
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
