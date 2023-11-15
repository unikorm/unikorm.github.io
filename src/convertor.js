

// convertor: decimal to binary and binary to decimal
const isNumber = (string) => {
    return !isNaN(string);  // this return true if it is not a number, so ! due to i need check if it is number
}

export const binary = (input) => {
    if (isNumber(input)) {
        let startValue = parseInt(input);
        return (startValue >>> 0).toString(2);  //put the number into binary format, >>> is some crazy JS, google it...
    } else {
        return "write NUMBER!!"
    };
};

export const decimal = (input) => {
    if (/^[01]+$/.test(input)) {
        return parseInt(input, 2);
    } else {
        return "invalid BINARY string";
    };
} ;