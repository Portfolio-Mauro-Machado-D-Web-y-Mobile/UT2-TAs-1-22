function removeFromArray(arreglo, item) {
    const index = arreglo.indexOf(item);
    if (index > -1) { 
        arreglo.splice(index, 1); 
    }
    console.log(arreglo);
}

function onButtonClick() {
    removeFromArray(document.getElementById("textInput1").value.split(","), document.getElementById("textInput2").value);
}