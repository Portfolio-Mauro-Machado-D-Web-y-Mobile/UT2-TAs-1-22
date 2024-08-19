function sumAll(a, b) {
    console.log(a+b);
}

function onButtonClick() {
    sumAll(parseInt(document.getElementById("numberInput1").value), parseInt(document.getElementById("numberInput2").value));
}