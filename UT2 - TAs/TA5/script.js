function leapYears(anio) {
    let result;
    if (anio%400 == 0) {
        result = true;
    } else if (anio%100 == 0){
        result = false;
    } else if (anio%4 == 0){
        result = true;
    } else {
        result = false;
    }
    console.log(result);

}

function onButtonClick() {
    leapYears(parseInt(document.getElementById("textInput").value));
}