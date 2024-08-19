function getSum(nums) {
    console.log(nums.reduce(
        (acumulador, valorActual) => acumulador + parseInt(valorActual), 0
    ))
}

function onButtonClick() {
    getSum(document.getElementById("textInput1").value.split(","));
}