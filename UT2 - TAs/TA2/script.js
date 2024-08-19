function reverseString(texto) {
    console.log(texto.split("").reverse().join(""));
}

function onButtonClick() {
    reverseString(document.getElementById("textInput").value);
}