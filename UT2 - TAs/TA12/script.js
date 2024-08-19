const mayus = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const minus = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols = [];

for (let i = 33; i <= 47; i++) {
    symbols.push(String.fromCharCode(i));
}

const allCharacters = [...mayus, ...minus, ...numbers, ...symbols];

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function generatePassword(length){
    let password = "";
    password += mayus[getRandomInt(mayus.length)];
    password += mayus[getRandomInt(mayus.length)];
    password += minus[getRandomInt(minus.length)];
    password += minus[getRandomInt(minus.length)];
    password += numbers[getRandomInt(numbers.length)];
    password += numbers[getRandomInt(numbers.length)];
    password += symbols[getRandomInt(symbols.length)];
    password += symbols[getRandomInt(symbols.length)];
    
    while (password.length < length) {
        password += allCharacters[getRandomInt(allCharacters.length)];
    }

    return password;
}

function onButtonClick() {
    document.getElementById("contrasenia").innerText = generatePassword(parseInt(document.getElementById("textInput1").value));
}