function getOdds(nums) {
    console.log(nums.filter((numero) => numero%2!=0));
}

function onButtonClick() {
    getOdds(document.getElementById("textInput1").value.split(","), document.getElementById("textInput2").value);
}