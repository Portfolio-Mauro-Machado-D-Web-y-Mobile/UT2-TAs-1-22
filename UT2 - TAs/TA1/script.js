function repeatString(texto, repeticiones) {
    for (let i = 0; i < repeticiones; i++) {
        console.log(texto);
    }
}

function onButtonClick() {
    repeatString(document.getElementById("textInput").value, parseInt(document.getElementById("numberInput").value));
}