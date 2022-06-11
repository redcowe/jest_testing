function capitalize(a) {
    return a.charAt(0).toUpperCase() + a.slice(1);
}

function reverse(a) {
    return a.split("").reverse().join("");
}

const calculator = {
    add: (a, b) => {return a + b},
    subtract: (a, b) => {return a - b},
    multiply: (a, b) => {return a * b},
    divide: (a, b) => {return a / b},
}

function caesarCipher(string, shift) {
    //array for holding cipher text values
    let cipherText = [];
    splitString = string.split("");
    splitString.forEach(val => {
        let ascii = val.charCodeAt(0);
        
        if (ascii == 32) {
            cipherText.push(String.fromCharCode(ascii));
        }
        //checking lowercase values
        else if (ascii >= 97 && ascii + shift > 122) {
            let asciiCipher = (ascii + shift) - 26;
            cipherText.push(String.fromCharCode(asciiCipher));
        }
        // //checking for uppercase letters
        // else if (ascii >= 65 && ascii + shift > 90) {
        //     let asciiCipher
        // }
        else {
            cipherText.push(String.fromCharCode(ascii + shift));
        }
    })
    return cipherText.join("");
    
}
console.log(caesarCipher("hello", 10));

module.exports =  {
    capitalize: capitalize,
    reverse: reverse,
    calculator: calculator,
    caesarCipher: caesarCipher,
};