function convertToCelsius(temp) {
    console.log(Math.round(((temp-32)*50)/9)/10);

}

function convertToFahrenheit(temp) {
    console.log(Math.round((((temp*9)/5)+32)*10)/10);

}

function onButtonClick1() {
    convertToFahrenheit(parseInt(document.getElementById("textInput").value));
}

function onButtonClick2() {
    convertToCelsius(parseInt(document.getElementById("textInput").value));
}