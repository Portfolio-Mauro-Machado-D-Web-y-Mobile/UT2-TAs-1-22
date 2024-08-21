
function onButtonClick() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(document.getElementById("textInput1").value));
    document.getElementById("lista").appendChild(li);
    document.getElementById("textInput1").value = "";
}